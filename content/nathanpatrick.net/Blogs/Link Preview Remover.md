---
title: Link Preview Remover
date: 2024-09-23
authors: nathanpatrick
tags: [technology]
---

### Overview

This is a guide on how to remove link previews from your favorite apps like Discord, Instagram, and other sites. Since this is at the website level, the link preview checkers cannot tell what website it goes because it uses Javascript to redirect 3 times. This guide is pretty straight forward as long as you have a GitHub account and can create files. 

<!-- truncate -->

### Basic Structure:
Main Folder 
  -  index.html
  -  Redirect1.html
  -  Redirect2.html
  -  Redirect3.html


### High Level Understanding
This code will be hosted as a website using GitHub Pages, then run by going to the first redirect link, then goes through the 3 redirects. 

Main Folder: Location where all files are stored
  -  index.html: The first file GitHub looks for to host
  -  Second File: Uses Javascript code to open the thrid file in your project
  -  Third File: Does the same as the first and the second, but opens the last file in the project
  -  Last File: Opens the example website 


### First File (index.html)
``` html
<script>
    window.location.href = 'https://GitHub_Username.github.io/Project_Folder/File.html';
</script>
```

Basics of How it Works
 - This is a simple HTML page
 - The *grpchatdstryr.github.io* is the form GitHub creates when you set up GitHub Pages
 - The *Link-Preview-Remover* is the main directory where GitHub Pages looks at to host my code
 - The *Redirect1.html* is the file the Javascript opens


### Second File (Redirect1.html)
``` html
<script>
    window.location.href = 'https://grpchatdstryr.github.io/Link-Preview-Remover/Redirect2.html';
</script>
```

This does the same kind of thing that index.html does. It opens the link to the next redirect page (Redirect2.hmtl)

Just a piece of advice, your code should follow this form. I recommend using Redirect1(2, 3) as it makes it less complicated. 
I also recommend using 3 files as it gives you 3 (4 with url shortener) layers in between the original link and what you want. 


### Last File (Redirect2.html)
``` html
<script>
    window.location.href = 'https://example.com';
</script>
```
This is the last file that redirects to the main website you want. For this example, it redirects to example.com, but you can put whatever link you want.


### General Formatting
``` html
<script>
    window.location.href = 'https://Your_GitHub_Username.github.io/Project-Folder/File.html';
</script>
```

Once you get all the HTML files set up, you will need to set up GitHub Pages. Thankfully the process is quite simple. 


### Setting up GitHub Pages

1) Go to your Project directory
2) Click the *Settings* icon in the far right 
3) Under *Code and automation* click *Pages*
4) Make sure *Source* is set to *Deploy from a branch*
5) Under Branch select *main* instead of *None*  *Make sure the Folder is set to / (root)  (should be defaulted)*
6) Click *Save*

Then wait a few minutes as it creates a webserver to host your code.

Once your website it done, you have to copy the website file of your first redirect specifically, otherwise it will not work. Your's should look like:
https://grpchatdstryr.github.io/Link-Preview-Remover/

If it works, it will redirect from 
https://grpchatdstryr.github.io/Link-Preview-Remover/ ...
``` html
index.html -> Redirect1.html -> Redirect2.html -> example.com
```

Then, you can use your favorite link shortener program to make it even more disquised 
I personally use Free URL Shortener found here: 
https://free-url-shortener.rb.gy/

Here is the final product: 
https://rb.gy/pagyzz


Congrats 🎉🎉🎉


___
#Blogs
