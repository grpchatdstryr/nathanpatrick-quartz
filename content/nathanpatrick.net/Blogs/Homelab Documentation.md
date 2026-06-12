---
title: Homelab Documentation
date: 2024-09-23
authors: nathanpatrick
tags: [technology, linux]
---

# Homelab Documentation

## Equipment

##### Dell PowerEdge R720
- Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz
- 128 GB RAM
- 16 TB of Storage

##### Dell Precision T3610
* Intel(R) Xeon(R) CPU E5-1620 v2 @ 3.70GHz
* 40 GB RAM
* 320 GB of Storage

<!-- truncate -->

##### GL-iNet - GL-AXT1800
* Travel Router
* OpenWRT

##### TP Link Switch (10 Port)
* 10 port

##### Ethernet Cables
* Best Buy CAT6 
* Amazon Basics CAT6
* 12 Total Cables


## Home Network

``` html
[Home Router]
	  |
[Portable Router] (TailScale)
	  |
vCenter (fbinetwork.gov - Local DNS) (LAN Only)
	Datacenter
		Cluster
			Dell R720
			Dell Precision
				[Services]
				 - Pi-Hole
				 - Portainer
					 - NextCloud
					 - Plex Media Server
				 - TrueNAS
					 - SMB File Share
				 - Ubuntu Server
					 - Local Project Website
				 - vCenter
			
				[Websites] (Public)
				 - rick-roll.zip
				 - jsulgrove.me
				
				[Active Directory Lab]
				 - Windows Server 2019
				 - Windows 10 Enterprise
				 - Windows 10 Enterprise
			
				[Cybersecurity Lab]
				 - System Hardening Box
				 - Kali Linux
				 - Ubuntu Proxy
			
				[Game Servers]
				 - OPNSense Router
				 - Minecraft Server
				 - Terraria Server
			
				[Random Operating Systems]
				 - Arch Linux
				 - Uwuntu
				 - Windows 10

```


## General Overview

Hey there, thanks for reading my Homelab Project blog. This is a project that started around the middle of my first semester as a Junior. I thought it would be a good project to learn different IT skills and gain some extra functionality in my tech setup. Now righting this blog, I can say that I use some of the functions every day and has been worth it. Unfortunately, it did require a fair bit of equipment, however I believe I maximized my purchases. My equipment includes a GL-iNet travel router, a Dell PowerEdge R720 Server, a Dell Precision T3610 Desktop, a cheap TP Switch, and a bunch of Ethernet Cables. 

Originally, I had my setup at school, but ran into DNS issues as our school has wonky DNS servers. Now everything is on my home network. I plugged my router into our home router to have my stuff separate from the main network. I set up TailScale directly on the router, so I can VPN into it for remote access. I have TailScale on my PC, Laptop, and Phone, which makes for a seamless experience that I will talk more about later. 

The next step was to set up an IP Scheme. I didn't want something super complicated, so I used a /24 subnet because I won't need more than 254 IP addresses. I chose the IP address 10.69.42.0/24 for the memes and it took less time to type than 192.168.x.x. 

Liberty University gives IT Students free access to a bunch of VMWare products, some of which Workstation Pro, ESXI, and vCenter. I chose that route because it would look good to have VMWare experience, would have more control and customizability, and it is free. Because I have 2 servers, I wanted to cluster them together to share resources. I put ESXI on both machines, set them up, added vCenter on the PowerEdge. I also bought 16 TB of storage (for around $100 on eBay!) and used RAID 5 for redundancy. 

Before starting my Homelab project, I have heard so much about Pi-Hole and how it is such a cool tool. The was one of my first projects, where I could have network-wide AdBlock. Also I could see all traffic and block telemetry and other sketchy data. I later set up local DNS, following my naming scheme. I have named a couple of my devices after the FBI, so my computer was *FBI-Laptop* because people found it funny. I decided to keep that naming scheme with my Homelab. My local DNS follows the domain of *fbinetwork.gov*, where the service would be the subdomain. So, my router is *router.fbinetwork.gov* and Pi-Hole is *pihole.fbinetwork.gov*. That way, I don't have to remember the IP addresses of each service and it looks nicer. Each service, which I will talk more about later, has it's own subdomain. That is a general overview of my setup, thanks for hanging around! I will now list some of the services that I am most proud of. 


## rick-roll.zip

I have always wanted to self host a website, but never knew how to safely. Recently, I bought the rick-roll.zip domain the day the .zip TLD came out. I am a bit obsessed with Rick Rolling, so when I heard about the .zip TLD, I knew what I had to do. Since then, I have figured out how to safely self host a website, without publicly exposing my router, and understand best practices more.

Here is my setup. I set up a Debian box, updated it to make sure it has all the security patches. Then I installed Docker, which I put NGINX as a container. I asked my friend to design a clean design for a front facing website. But in the mean time, I used ChatGPT to generate a simple button to click to download the lyrics to Never Gonna Give You Up. Since I didn't want to port forward, I decided on Cloudflare Tunneling. I installed the client on the Debian VM, then it creates a tunnel to Cloudflare. I then tell Cloudflare to look for the IP and port number of the website, which gets forwarded to making rick-roll.zip the webserver. So all traffic takes place through Cloudflare, instead of traffic going to my home router. 

There are several Easter Eggs hidden in the website. However, all the code is on GitHub. I put Git on the Debian machine and on my laptop, so I can gradually update code, and push to GitHub, then Pull the code down from the host. It makes the process of updating the management of code so much more efficient and I get the benefit of Open Sourcing, and I can track my progress.  

You can find the website here: https://rick-roll.zip


## jsulgrove.me

A friend made a deal with me that I would host his personal blog website if he helps design my rick-roll.zip website. Since he is a Software Developer, he has more skill in that area, while I have more experience in IT. He doesn't have to pay a company to host his website, and I get a better designed website. 

My friend has experience with .NET, that is what he decided to build his website with. It is not the easiest process to host .NET with NGINX, so I used Windows Server 2019 and Microsoft IIS. I also used Cloudflare Tunneling to make the Website public without port forwarding. I also used some Cloudflare rules to redirect the basic `jsulgrove.me` to `www.jsulgrove.me.` So no matter what you type, it redirects to the www. website.  

You can find his here: https://jsulgrove.me (still under development)



## TrueNAS

One of the big parts of getting 16 TB of storage was to store things of course! Did I need to get that much? No, I didn't. However, it was around $100, which is very reasonable. I also didn't want to have to worry about running out of space, so I got more than I needed. As a Photography/Videography enjoyer, I need more storage for all the photos and videos I take, and having a place where I can share from my phone, have it backed up in a separate location, and access it on my computer to edit, would be very nice. Well that is where TrueNAS comes in. TrueNAS is a NAS Software where I can do a lot, but most importantly, set up a Network Share. 

Since I had Hardware RAID, I didn't need to use TrueNAS's software RAID. However, I created an SMB user, and set up an SMB Share, so my Windows PC, Linux Laptop (at the time), and phone could all access it. There I back up all my files instead of relying on Google. 

In my dorm, I use a PC on a monitor, but for class, I use a Laptop. Whether I am taking notes for class, planning out projects, or even writing this blog, I would like for both devices to access the notes. I use the Obsidian application as Markdown is nice. I could pay for Obsidian Sync for $8, or I could create a network share and point Obsidian to the shared file. I did the second. I also do the same for VS Code so I can continue coding on my PC when I get back from classes. I end up using that part of my Homelab multiple times a day. 


## Plex Media Server

Do you also have stacks and stacks of CDs lying around? If only there was a way to convert them into digital copies and upload them to a self hosted server with a nice GUI. Wait, sounds like Plex! Like most people, or their parents (depending on age haha) have a bunch of Movies and Albums lying around collecting dust. I wanted to have a library where I could watch those movies from my device, without having to pay Netflix or Amazon. I used a tool called [MakeMKV](https://www.makemkv.com/) to rip the data correctly off the CD's. 

I used Docker (and Portainer for a GUI) to host the Plex Server. I uploaded the movies and albums to my network shared folder, which I created a mount point for docker so Plex could see the folder. Then I connected Plex to the SMB Share. This took me quite a long time because it was my first time using docker and I didn't understand mount points. 

``` html
SMB Share -> Docker Mount Points -> Plex Media Server -> Reads (Plex) SMB Folder
```


## Game Servers

With 50 GHz of processing power, 168 GB of RAM, and plenty of storage, I could set up a *BEEFY* Minecraft server. I have a couple friends who play Minecraft, who pay for a Realms server. Hosting my own server and allowing them to play on it would save them money, and give them a better experience. The only problem is *security*. A Minecraft server requires port forwarding to access it publicly, which I could set up proper firewalls to secure, but is still risky. Instead, I can avoid that by giving them VPN access. That would give them access to the server, but also everything else on my network, which is not ideal. To solve that, I used VMWare networking creating a DSwitch and a Portgroup to separate the server from everything else. I added an OPNSense firewall to block all other traffic than the required, and allow for VPN access. That way, my friends can access only the server, have no more access than they need, and not port forward. While this project is not 100% finished, I am well on my way to accomplishing it. In addition to a Minecraft Server, I set up a Terraria server so they can play that too. 



## Active Directory Lab

As a Lab Technician at Liberty University, I have been tasked to learn become familiar with Active Directory. Due to that, I have set up my own Active Directory Lab, which is a work in progress. So far, I have created a private LAN using a DSwitch and Portgroup. I set up Windows Server 2019, and 2 other Windows 10 Enterprise computers. Both Enterprise computers have a local user, and Active Directory users. I plan on working with group policy to manage both without having to go through each user manually, changing settings. 

Separately, I have created another Windows Server 2019 running Active Directory, tying my Laptop through Active Directory. Since I am at home for Spring Break doing this, I can connect over LAN. However, once I go back to school, I will have to do that through VPN, which I am figuring out. 


## Other Fun Projects

Along with the various service running, I have tested out a fair bit of OS's, seeing how they work, what they look like, and do differently. Last semester, I had a project in my Linux class where I had to set up 2 Linux OS's and compare/contrast them, and present to the class our findings. I ended up choosing Arch Linux and Uwuntu (a silly spinoff of Ubuntu). I set up both in vSphere and presented in front of the classes. Just for the memes, I will include the presentation *[here](https://github.com/grpchatdstryr/Arch-Linux-Uwuntu-Presentation/blob/main/345%20Linux%20Distro%20Project.pdf)*. I had some quality memes, which most people didn't get 😞, but hopefully you can get a kick out of them. 

I recently set up a proxy using Ubuntu Server because I wanted to learn more about them and how they work. I used another Ubuntu Server to set up a simple LAMP stack because I wanted to learn more about it and locally host a website I made in my Web Development class. There are more projects that I want to work on, but haven't been able to due to time. But when I do, I will be sure to include it. If you have made it to the end, I really appreciate you following along! I wish you the best in your projects!


___
#Blogs
