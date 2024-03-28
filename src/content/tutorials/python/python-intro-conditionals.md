---
title: 5.Python Intro - Conditionals
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-conditionals.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 5
---
## Conditional

Conditionals as the name suggests are used to execute code blocks depending on certain conditions.

They are mainly expressed with the if, else if (elif) and else statements.

They are based on logical conditions which have to resolve a True or False value, conditions can be chained by using logical operators such as "and", "or" and "not"

The code can be read as: if "condition is true" execute code, else if "other condition is true" execute code, else "if none of the previous conditions are true" execute code.

The example should make things a lot clearer. 

```python
# --- IF STATEMENTS----

# if, else & elif execute different code depending
# on conditions

var: str = 'String'
tmp: int = 5

if (var == 'String'):
    print('True')
else:
    print('False')

if (len(var) == 2):
    print('var is short')
elif (len(var) == 4):
    print('var is medium')
else:
    print('fml')  


if (len(var) >= 2 and len(var)<= 10):
    print('some mixed conditionals')
else:
    print('False')  

```

[PREV: Collections](./tutorials/series/python/python-intro-collections)

[NEXT: Loops](./tutorials/series/python/python-intro-loops)