---
title: "0.Python Intro - Setup"
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/intro-python.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 0
---

## Necessary Installs

### Python

Well we do need the language and the interpreter and all that to get started ;)

[Install Python 3.9.1](https://www.python.org/downloads/release/python-391/)

### Git

Git is a system of version control (think backup and file sharing for code) invented by the god himself mr penguin Torvald. The code for this course will be available on Github which is a free(ish) git hosting service.

Learning to use Git properly is one of the most important things you will ever do, I'll provide a quick guide in the future cause I'm nice that way

[Install Git](https://git-scm.com/)

## Environment Setup

[Install VsCode](https://code.visualstudio.com/)

After installing VsCode we should add a couple of extensions to help us with development:

* Python by Microsoft

  Language support extension for Python
* Pylance by Microsoft

  Useful Linter and support for static typing
* Bracket Coloriser

  Makes brackets colours match for easier readability
* Material Icon Theme

  Cause it's AESTHETIC 
* Git Lense

  Useful Git extension that includes git blame to see who's done what... programmers are nice that way ;)

### The debugger

The debugger is your best friend, TRUST ME, no need for print statements everywhere, no need to guess what your code is doing or where it's going, it's all there for you and it's there for free. Learn it, use it and you'll make learning to code a much less frustrating experience :)

Setting up the debugger is fairly simple after installing all the extensions, it should automatically prompt you to create a lunch.json file and make you choose the configuration from a predefined list.

To set breakpoints (points of interests where the debugger will stop) just place a red dot next to a line of code by clicking to the left of the line number

Use F5 to run your program, and jump from breakpoint to breakpoint

F10 to go line by line

There are also step into and step out functions which will be useful once we get into methods and loops.


[NEXT: Syntax](./tutorials/python/python-intro-syntax)


