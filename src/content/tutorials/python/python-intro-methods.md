---
title: 8.Python Intro - Methods
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-methods.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 8
---
```python
# methods definitions
# methods or functions are blocks of code that are only executed when called
# all methods are defined using snake_case
# methods can take arguments (or parameters) that we "pass in" separated by a comma
# all methods are declared using the def keyword

def say_hello(name: str):
    print('hello ' + name + '!')


say_hello('Natalia')
say_hello('Carlo')

def add(a: int, b: int):
    return a + b

result: int = add(5, 10)

print(result)


# talk about all the bad ideas python has when talkin' 'bout functions

# default  value

def real_slim_sikora(name = "Natalia"):
  print("Hi! My name is" + name)

#declare constant instead

# variable variables key value pairs
def dog_names(dog2, dog3, dog1):
  print("Who's a good boi? you are " + dog1)

dog_names(dog1 = "Ule", dog2 = "Idaho", dog3 = "Ossi")

#this just creates confusion really

#unknown number of parameters
def horrible_children(*kids):
  print("The most horrible child is " + kids[2])

horrible_children("Emil", "Tobias", "Linus")

# just use a list or figure out what you are doing first ;)

# RECURSION

def recursion(k: int):
  if(k > 0):
    print(k)
    result = k + recursion(k - 1)
    print(f'{result}')
  else:
    result = 0
  return result


recursion(6)


# avoid tail recursion infinite loop


```

[PREV: Files](./tutorials/series/python/python-intro-files)

[NEXT: User Input](./tutorials/series/python/python-intro-user-input)