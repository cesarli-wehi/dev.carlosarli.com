---
title: 9.Python Intro - User Input
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-user-input.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 9
---
## User Input

With Python it is possible to get user input in a variety of ways. 

In this example we will write a little command line program to get input from a user.

We also have a little exercise at the end that should help you put together all the concepts explored in the python intro series

```python
# USER INPUT -------------
import sys 

print('What is your name?')
 
# Stores everything typed up until ENTER
name = sys.stdin.readline()
 
print('Hello', name)


# game time 

def add_two(a: int, b: int):
    return a+b

while True:
    print('first number please')
    a: int = int(sys.stdin.readline())
    print('second number please')
    b: int = int(sys.stdin.readline())
    result: int = add_two(a, b)
    print('result: '  f'{result}')
    print('press q to quit or any other key to continue')
    c: str = sys.stdin.readline().rstrip()
    if c == 'q':
        break
    else: 
        continue


# exercise time baby
#this program is fun but has many flaws
# first what if the user inputs something that is not a number?
# can you fix it?
# what if the user would like to input 3 or 4 numbers?
# can you do that?
# can you extend our little calculator to do divisions too?
# have fun
```

[PREV: Methods](./tutorials/series/python/python-intro-methods)

[NEXT: Intro to NumPy](./tutorials/series/python/intro-to-numpy)