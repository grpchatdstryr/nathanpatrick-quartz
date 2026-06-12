---
title: Windows 11 Installation Guide
date: 2024-09-23
authors: nathanpatrick
tags: [technology]
---

### Overview
Windows is the most popular operating system in the world. It’s used by businesses, schools, and individuals all over the globe. But over time, Windows has gotten more and more spooky. There’s more data collection, tracking, and advertisements than ever before. Also bloat has plagued the OS for ages which slows everything down, drains battery, and clogs the experience. Fear not, there is hope! In this guide, I’ll show you how to install Windows 11 the _Alpha Way_. That way you can be a complete Windows Chad.

<!-- truncate -->

## Fresh Install

Download Windows!   To make this more streamlined you will want to install a fresh copy of windows using a bootable USB. 

1) First, go to the Microsoft Windows 11 Download website [or this Hyperlink](https://www.microsoft.com/software-download/windows11/)    
2) Scroll down to the bottom where it says “Download Windows 11 Disk Image (ISO) for x64 devices” 
3) Click the dropdown and select: “Windows 11 (Multi-edition ISO for x64 devices)” 
4) Click “Download Now”
5) Select the Language you want: “English” and click “Confirm” 
6) Then the “64-bit Download” button beneath Download – Windows 11 English 

Be sure to copy your Windows Product Key so you can continue using which edition just incase. 

## Download Rufus  

Once it finishes, you will want to download a ISO USB Burner tool called Rufus. You can download Rufus [right here.](https://rufus.ie/en/)  

Scroll down under the Download Header and select the latest rufus.exe download. Once it finishes downloading, open rufus.exe 

1) Insert a USB into your computer that is at least 8GB in size.   Rufus will automatically detect your USB.  
2) *Be VERY careful that you select the right drive because it will wipe everything.* Click “*Start*”. 
3) If it prompts you which edition, click whichever your computer normally runs.   This process can range from a few minutes to a couple hours depending on the speed of the drive.   

Once it finishes, Congrats! You have a bootable USB 

## Booting from USB  

To reinstall the fresh copy of the Windows 11 you just made, you will have to start by turning off your computer.

MAKE SURE TO BACK UP ALL OF YOUR DATA!!!  
THIS WILL WIPE EVERYTHING FROM YOUR HARD DRIVE! 

Once your computer is completely powered off, turn it on and right after, press F12, F11, F1, or F2, or another. *If none of those work, check with your manufacture to verify which Key to press.* After pressing whichever key repeatedly, it will boot into BIOS 

With your flash drive plugged in, select the USB drive to boot from.  

## Windows Setup  

Congratulations! Now you can set up Windows!  

*Note, if you are using Ethernet or running it on a Virtual Machine, you will need to disconnect the Ethernet*
  
1) Start with selecting the Keyboard input method and skip for a second keyboard layout.  
2) To avoid having to set up your computer with a Microsoft account later, you will need to edit the Out of Box Experience Setup  
	1) Open command prompt by typing Shift + F10
	2) Type: OOBE\BYPASSNRO
	3) Your computer will restart and update to allow you to set up offline 
3) Go through the steps again and select “*I don’t have internet*” and “*Continue with limited setup*”
4) Set what ever name you want to use for the device, create a strong password, and finish the security questions 
5) Next, you will be greeted with “*Choose privacy settings for your device*”  
6) Unfortunately, most of those features are for fingerprinting, tracking and advertising. 9 people out of 10 will likely never use them, so unless you need them, turn all the options Off 

 Your computer will then do the rest.  

## First Things  

Yay! Your computer is now already faster and more private because it does does not tie to any Microsoft account which can be used to fingerprint and track. 

1) The first thing to do is to connect the your network, which will allow for needed update to get downloaded, install apps, and other uses.
2) Once connected, go to Settings > Windows Updates  and click “Check for Updates”
3) Download and Install the latest updates. 

 Updates are important to keep your device secure and fast. Since it will take a while to download and install, we can move on for now. 

## Firefox  

 To stay more private, you will need to use the right tools, starting with the right browser. The average person uses their computer to look things up, watch videos, and shop; all of which big corporations find valuable. Chrome makes most of their money from advertising, meaning, finding who you are, what you like, where you are located, and more, all of which they put into an advertisement profile of you. Chrome may be free to use, but at the cost of our privacy. We are the product. As a human who values my privacy from big corporations, we need to protect ourselves against the giant eyes. It starts with the browser.  

There are two browsers I recommend, Firefox and Brave. Both are known for their privacy considerations and features. I will be using Firefox, but the steps can also be followed for Brave.  

Open Microsoft Edge and be careful about not continuing without reading the popup. We are only using Edge to download Firefox.  
   
[Click this Hyperlink](https://www.mozilla.org/en-US/firefox/new/)  to download Firefox, or visit their website. Open the download and click “*yes*” Set it as your default browser. Skip and skip both unless if you would like to sign in 

## Extensions

Extensions can go a long way to increase security, improve speed, and add more features to your browsing experience.    Here are some of the extensions I use. To see the extensions, you can either type:  
Ctrl + Shift + A, or click the hamburger icon (three lines the right corner) > Add-ons and Themes > Extensions 

 *You will need to give them permissions *

 Links :  
 - [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)  :   Powerful Ad-Blocker, tracker-blocker, and popup-blocker
 - [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)    :  Protects against tracking from ad-loving sources
 - [HTTPS Everywhere](https://www.eff.org/https-everywhere=rating=search) : Flashes a warning whenever an HTTP website loads
 - [DuckDuckGo](https://addons.mozilla.org/en-US/firefox/addon/duckduckgo-for-firefox/): Uses DuckDuckGo instead of Google’s search engine
 - [Privacy Badger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/): Blocks trackers

 Extras:  
 - [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/?utm_source=addons.mozilla.org&utm_medium=referral&utm_content=search/): Changes every website to dark mode, even if it wasn’t designed to  
 - [SponsorBlock](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/): YouTube extension where sponsored content is skipped within the video
 - [Return YouTube Dislikes](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/)  : Enables the YouTube dislike button
 - [Better Canvas](https://addons.mozilla.org/en-US/firefox/addon/better-canvas/): Improves and adds features for the Canvas Software used by students 

Disclaimer: Some of the extensions may break certain websites. If that is the case, you can disable some extensions. The most common ones to break pages are uBlock Origin and DarkReader, both of which you can disable. I would recommend pinning them so they are easy to disable just incase. 

## Resume Updates

Check on your Windows updates by going back into Settings and it may prompt you to restart your computer. If it does, *do it*. 

1) Once Windows finishes updating, you will want to update your drivers. Go to [this website if you have a Dell Computer](https://www.dell.com/support/home/en-us?app=drivers)  
2) On the right, there will be a box that says “*Download & Install SupportAssist*”  
3) Click *Download*. Run the .exe and click *yes*. Make sure to Decline the Data Collection    
4) Continue through the installation and you will be prompted to restart 
5) Restart and open the Driver and Support Assist Application 
6) Check for updates and update. 

If you don’t have a Dell computer, then go to your manufacture’s driver website and update from there.  

## NVIDIA (*If you have*)

GeForce Experience allows you to keep your Graphics Card’s drivers up to date and change performance settings for games.

1) Go to [This Hyperlink](https://www.nvidia.com/en-us/geforce/geforce-experience/download/) that goes to NVIDIA’s Website, and click “*Download Now*”
2) You will need to create an account unless you already have one. Login/create a new account.   
3) Opt out of the sending gaming & entertainment deals etc. 
4) Once installed, go to the “Drivers” tab in the top and click “CHECK FOR UPDATES”
5) Update if needed.    

Go to the Settings Cog wheel in the top bar, scroll down and turn off “BatteryBoost” if you want significantly better gaming performance. 

## Wintoys  

Wintoys is a tool that allows you to do what Windows makes hard to do. Go to the Microsoft Store App and search Wintoys. Allow it to make changes to your device. 

1) Click the apps tab, second down from the home tab on the left top.   
2) Go through and uninstall the following, unless you use them. Most of these apps are never used by the user and end up uselessly running in the background and taking up storage.   You can also do this in the Settings App and searching “Add or remove programs” 

Apps:      Clipchamp     Cortana     Feedback Hub     Get Help     Mail and Calendar     Microsoft News     Microsoft People     Microsoft Solitaire Collection     Microsoft Sticky Notes     Microsoft Teams     Microsoft Tips     Microsoft To Do     MSN Weather     Spotify Music     Windows Maps     Xbox     Xbox Game Bar      Xbox Game Bar Plugin     Xbox Game Speech Window     Xbox Identity Provider     Xbox TCUI     Your Phone 

Boost performance and Security
* Next go 2 tabs below the Apps tab.   This section is all about improving computer performance. If you have an older computer, this part is especially beneficial for speed. 
* Ultimate Performance Power Plan: You can choose to turn on or off. If you have a laptop, it is generally recommended to keep it off, as it drains battery much faster and puts more strain on the hardware. 
* VBS (Virtualization-based security): Turn On, it adds a layer of security by creating a virtual environment, where certain parts of the computer is virtualized, and running security tools in it 
* Startup Apps: These are apps that run when your computer starts up. Many times, unesesarry apps would be enabled, making a slower load time, wasting resources and battery. 

Here are some apps to disable: 
* Some apps do not show enabled in Wintoys. You will need to go to Task Manager by pressing *Ctrl + Shift + Esc*. Then click “*Startup Apps*” and disable apps by right clicking and “*Disable*” 
* Apps:   Microsoft Teams     Microsoft Edge (msedge)     OneDrive     OneNote 
* Repair: You could scan for issues with your Computer Image, File System, and Disk. Normally it would not find anything wrong, but is worth checking just in case. 

## Tweaks 

The last Wintoys page to check out deals with visual changes, privacy, ads and more.  

Startup Menu  
* Turn off “*Include Bing search results*” so when you use start to search for a file, it doesn’t search the internet instead.   It also doesn’t constantly refresh searches on edge with every letter and word you type, saving bandwidth, battery, and performance.   
- Turn off “*Autoinstall suggestions*” so your computer stays less bloated. 

Privacy  
  * Turn everything off (besides “Camera on the lock screen for Windows Hello). They do not need to be turned only run in the background wasting your resources and battery. 

 Ads  
* Turn off everything. Some of those services are for Microsoft to use to profile, track, and serve you ads. They are unneeded. 

## Taskbar/Aesthetics

Windows looks pretty good already, but there is a fair bit of bloat to remove. 

Starting with the taskbar.  
 1) Right click anywhere on the taskbar
 2) Click “Taskbar settings”
 3) Change “Search box” to “Hide”
 4) Disable:  
	* Task view 
	* Widgets
	* Chat  

Unpin shortcuts and add useful apps to start. Some of the following should be removed: 
* WhatsApp
* Netflix
* Prime Video
* ESPN
* Instagram
* Messenger  

Put apps you use on it for quick access. 

Enable Dark Mode
* Go into Settings > Personalization > select Dark Mode
* Change Theme Color to your favorite Color.
* Download a cool picture and set it as your wallpaper. 

## Other Settings

There are some other settings you can set to make your Windows Experience Even Better. 

1) First, go to Settings > Apps > Default apps > Firefox: Set all to Firefox
2) Go back and click Microsoft Edge and set all to Firefox *Some can’t be easily changed*  
3) Turn On HDR: Settings > System > Display > Turn on HDR
4) More HDR: Above Steps > More about HDR > Turn on Auto HDR and Battery Options: Optimize for image quality
5) Audio Enhancer: Settings > System > Sound > Speakers (under Output) > Audio Enhancements to Device Default Effects
6) Disk Cleanup: Settings > System > Storage > Cleanup recommendations: check what you want  
7) Optimize Drive: Settings > System > Storage > Advanced storage Settings > Drive optimization > “Optimize”  
8) Advanced Gestures: Settings > Bluetooth & devices > Touchpad > Advanced gestures > Configure four-finger gestures:
	* Swipe up: Maximize a window
	* Swipe down: Minimize a window  
 
## Extras

Windows has other useful tools to please power users.  
* Sysinternals: Deep look into what is running, startup processes, network usage, and much more
* Powertoys: Useful features like converting screen text into text, copy in plain text and more  
Windows Sandbox: Windows Virtualization 

## Other Useful Features

* Generate Battery Report: Allows you to see the health of your battery and its degradation over time since the OS was Installed
* Restart Graphics Driver: If your graphics card is giving you weird issues. Sometimes will fix problems.
* Icon Cache: If your Icons/Thumbnails have problems
* Spotlight images: (Tweaks) download images shown on your lock screen 


___
#Blogs
