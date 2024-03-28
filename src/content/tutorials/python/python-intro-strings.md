---
title: 3.Python Intro - Strings
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-strings.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 3
---
```python
# ----- STRINGS -----

# Raw strings ignore escape sequences
print(r"I'll be ignored \n")
print("I'll be ignored \n hello")
 
# Combine strings with +
print("Hello " + "You")
 
# Get string length
str: str = "Hello You"
print("Length ", len(str))
 
# Character at index
print("1st ", str[0])
 
# Last character
print("Last ", str[-1])
 
# 1st 3 chrs
print("1st 3 ", str[0:3])  # Start, up to not including
 
# Get every other character
print("Every Other ", str[0:-1:2])  # Last is a step
 
# You can't change an index value like this
# str[0] = "a" because strings are immutable
# (Can't Change)
# You could do this
str = str.replace("Hello", "Goodbye")
print(str)
 
# You could also slice front and back and replace
# what you want to change
str = str[:8] + "y" + str[9:]
print(str)
 
# Test if string in string
print("you" in str)
 
# Test if not in
print("you" not in str)
 
# Find first index for match or -1
print("You Index ", str.find("you"))
 
# Trim white space from right and left
# also lstrip and rstrip
print("    Hello    ".strip())
 
# Convert a list into a string and separate with
# spaces
print(" ".join(["Some", "Words"]))
 
# Convert string into a list with a defined separator
# or delimiter
print("A, string".split(", "))
 
# Formatted output with f-string
int1 = int2 = 5
print(f'{int1} + {int2} = {int1 + int2}')
 
# To lower and upper case
print("A String".lower())
print("A String".upper()) 
 
# Is letter or number
print("abc123".isalnum())
 
# Is characters
print("abc".isalpha())
 
# Is numbers
print("abc".isdigit())
```


[PREV: Maths](./tutorials/series/python/python-intro-maths)

[NEXT: Collections](./tutorials/series/python/python-intro-collections)