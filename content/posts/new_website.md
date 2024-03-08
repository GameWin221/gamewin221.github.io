---
title: "New website"
date: 2024-03-07T19:30:00+01:00
description: "The (not so simple) journey of making my new website."
tags: ["web"]
type: post
weight: 0
showTableOfContents: true
---

As you can see I have a new website now. I've always wanted to have a blog where I could talk about my projects with a hope that *maybe* someone will get interested. If no one gets interested at least I won't bother my friends with things they probaly don't really care about :)

## The Journey
At first glance it might seem like this website is a typical Hugo generated website and it's true but that has not always been the case. Before I finally decided to use Hugo, I've been considering those 3 options:
- Make a website on my own using React
- Use Jekyll
- Use Hugo

And I've tried every single one of them before I decided to stick to Hugo.

### First came Jekyll
I can't remember where but somewhere while looking for nice Jekyll websites I came across the [Chirpy theme](https://chirpy.cotes.page/) made by Cotes Chung. I instantly loved it, just take a look at it:
![image](/images/chirpy1.jpg)

And it's got the archive timeline - Just as I imagined:

![image](/images/chirpy2.jpg)

I immediately thought that's what I'll go with and even downloaded Jekyll to test it but then as I was scrolling through the Chirpy github repo I noticed how many people have used this theme so far:

![image](/images/chirpy3.jpg)

21.3k and still growing. I definitely didn't want to use such a common template. I think of my website as of a business card, the idea of having the same business card as 21k+ people didn't seem too appealing.

### Then came the idea of making my own website

I thought that making my own website shouldn't be that hard. I wasn't wrong... until it was time to make the blog. Turns out that making a fully functional markdown blog that works fast while being reliable for the author (me) is complicated. Who whould've thought ¯\\\_(ツ)\_/¯

![image](/images/webpage.jpg)

That's the website right before I started to work on the blog.

I was trying not to think about all the problems I'll need to face while making it all on my own. I managed to make a *fairly well* working blog post interface. I was able to display .md files by supplying the file's name in the website's url: `gamewin221.github.io/blog/{blog_post_name}`. 

That's the moment when I wanted to add the functionality of displaying all public blog posts in the **Blog** page. Sounds easy right? Turns out that you cannot access the filesystem `require('fs')` if you use React. That ruined everything and it was exactly at that time when I decided to switch to Hugo and let it do the heavylifting for me.

### And finally there's Hugo
At first Hugo seemed a bit overwhelming to me but over time as I learned more about it - It was the best option for me, a modern alternative to Jekyll.

As you can see the website is fully operational now and I guess not much will change here for a long time. I'll just write blog posts and my personal little corner of the internet will grow.