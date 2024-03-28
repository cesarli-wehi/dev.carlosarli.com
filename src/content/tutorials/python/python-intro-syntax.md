---
title: 1.Python Intro - Syntax
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-syntax.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 1
---
## Comments

Comments are blocks of code that are ignored by the interpreter (they are not executed) they are used as a way to give information to other developers or notes for your future self.

Commented out code will not execute.

```python
# comment start with hash (shortcut is ctrl + /)

"""
Multi line comment 
"""
```

## Indentation

Indentation is organising code in a hierarchical manners using tabs before a line of code. 

Each tab represents a level of indentation. 

While in most languages indentation is mostly for style and readability, in Python it is necessary for the code to execute in the proper order.

Only tabs are acceptable. [Silicon Valley got it right  ](https://www.youtube.com/watch?v=SsoOG6ZeyUI)

```python
# ----INDENTATION-----
  #only tab is acceptable
    #level 2
      #level 3
```

## Printing info to console

```python
# ----BASE FUNCTIONS----

# print stuff to console
print('Hello World!')
```

## Variables

```python
# ----VARIABLES----

# Variables are names assigned to values
# The 1st character must be _ or a letter
# Then you can use letters, numbers or _
# Variable names are type sensitive

a = 10
print(a)

# variables are written in camelCase
aNewVariable: int = 5

# constants are written all caps in snake_case
THIS_IS_A_CONSTANT = 3.14
print(THIS_IS_A_CONSTANT)
```

## Types (rant warning)

```python
# ----TYPES----

# python is a dynamically typed language so type is usually inferred
# but luckily we can statically type if we want

# find type of variable or element
print(type(a))

# integer
b: int = 10
print(type(b))

# floating point number 
f: float = 1.5
print(type(f))

# boolean
g: bool = True
print(type(g))

# strings
c: str = 'String'
print(type(c))
d: str = "Still a string"
print(type(d))
e: str = '''A string with apostrophe' and quotes" '''
print(type(e))
```

## Operators

```python
# ----MATHS----

# --Operators--

tmp: int = 10
tmp2: int = 5

# plus +
print(tmp + tmp2)
# minus -
print(tmp - tmp2)
# times *
print(tmp * tmp2)
# divide /
print(tmp / tmp2)
# modulus %
print(tmp % tmp2)
# exponent **
print(tmp ** tmp2)
# floor division //
print(tmp // tmp2)

# --Logic--

# equals ==
print(tmp == tmp2)
# not equals !=
print(tmp != tmp2)
# greater than >
print(tmp > tmp2)
# greater equal >=
print(tmp >= tmp2)
# lesser than <
print(tmp < tmp2)
# lesser equal than <=
print(tmp <= tmp2)

# --Assignement--

# assign =
# plus equals +=
# subtract equals -=
# multiply equals *=
# divide equals /=

# --Logic Operators--

# and  &
# or |
# not !

# --Membership Operators--
# checks if element in sequence  in
# checks if element is not in sequence not in
```


[PREV: Install](./tutorials/series/python/python-intro-install)

[NEXT: Maths](./tutorials/series/python/python-intro-maths)