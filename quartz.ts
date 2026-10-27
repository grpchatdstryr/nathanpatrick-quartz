import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"
import * as ExternalPlugin from "./.quartz/plugins"

const explorerOptions: Partial<ExternalPlugin.ExplorerOptions> = {
  sortFn: (a, b) => {
    // Explorer serializes this function for the browser, so all ordering data
    // must be declared inside the function rather than captured from this file.
    const explorerOrder = [
      // Top-level sections
      "experience",
      "proficiencies",
      "activities",
      "blog",

      // Pages within Experience
      "job experience",
      "education",
      "certifications",
      "personal projects",
      "college activities",
      "volunteer work",
    ]

    const aName = a.displayName ?? ""
    const bName = b.displayName ?? ""
    const bottomOrder = ["about me", "resume"]
    const aBottomIndex = bottomOrder.indexOf(aName.toLowerCase())
    const bBottomIndex = bottomOrder.indexOf(bName.toLowerCase())

    if (aBottomIndex !== -1 || bBottomIndex !== -1) {
      if (aBottomIndex === -1) return -1
      if (bBottomIndex === -1) return 1
      return aBottomIndex - bBottomIndex
    }

    const aIndex = explorerOrder.indexOf(aName.toLowerCase())
    const bIndex = explorerOrder.indexOf(bName.toLowerCase())

    if (aIndex !== -1 || bIndex !== -1) {
      if (aIndex === -1) return 1
      if (bIndex === -1) return -1
      return aIndex - bIndex
    }

    if (a.isFolder !== b.isFolder) {
      return a.isFolder ? -1 : 1
    }

    return aName.localeCompare(bName, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  },
}

componentRegistry.setOptionOverrides("explorer", explorerOptions as Record<string, unknown>)

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
