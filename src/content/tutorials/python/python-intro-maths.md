---
title: 2.Python Intro - Maths
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-maths.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 2
---
## Maths

In python there is a very useful maths library which contains a plethora of common mathematical operation functions.

Below I listed the ones I consider the most useful

```python
# --Math operations--

import math
import random

#pi
print(math.pi)
# abs
print("abs(-1) ", abs(-1))
# max
print("max(5, 4) ", max(5, 4))
# min
print("min(5, 4) ", min(5, 4))
# power
print("pow(2, 2) ", pow(2, 2))
# round up
print("ceil(4.5) ", math.ceil(4.5))
# round down
print("floor(4.5) ", math.floor(4.5))
# round
print("round(4.5) ", round(4.5))
# exponent
print("exp(1) ", math.exp(1))  
# log(e)
print("log(e) ", math.log(math.exp(1)))
# base 10 log
print("log(100) ", math.log(100, 10))  
# square root
print("sqrt(100) ", math.sqrt(100))
# sin
print("sin(0) ", math.sin(0))
# cos
print("cos(0) ", math.cos(0))
# tan
print("tan(0) ", math.tan(0))
# asin
print("asin(0) ", math.asin(0))
# acos
print("acos(0) ", math.acos(0))
# atan
print("atan(0) ", math.atan(0))
# convert to radians
print("radians(0) ", math.radians(0))
# convert to degrees
print("degrees(pi) ", math.degrees(math.pi))

# Generate a random int in range
print("Random", random.randint(1, 101))

# ----- NaN & inf -----
# inf is infinity
print(math.inf > 0)
 
# NaN is used to represent a number that can't
# be defined
print(math.inf - math.inf)
```

[PREV: Syntax](./tutorials/series/python/python-intro-syntax)

[NEXT: Strings](./tutorials/series/python/python-intro-strings)