---
title: 6.Python Intro - Loops
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-loops.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 6
---
## What are Loops?

Loops are blocks of code that execute repeatedly (in a loop) until a condition is met. Usually this condition can be a logical statement or a range. They are a great tool to write shorter code although they should be used carefully.

Loops are often the cause of infinitely running code or particularly slow code, so a bit of care should be taken when writing them.

You should always make sure, unless you intend to run it ad infinitum, that the loop has an exit condition.

### Break and Continue

A break statement will immediately exit the current loop.

A continue statement will skip the rest of the loop and go back to the start.

### Else

An else statement at the end of a loop indicates a block of code that will always run after the loop has finished executing.



## While Loop

While loops will execute as long as a Boolean condition is not met, or a break statement is reached.

```python
# ----- LOOPS -----
# While : Execute while condition is True
END_LOOP: int = 5
w1: int = 1
while w1 < END_LOOP:
    print(w1)
    w1 += 1

END_LOOP_TWO = 20

w2: int = 0
while w2 <= END_LOOP_TWO:
    if w2 % 2 == 0:
        print(w2)
    elif w2 == 9:
        # Forces the loop to end all together
        break
    else:
        # Shorthand for i = i + 1
        w2 += 1
        # Skips to the next iteration of the loop
        continue
    w2 += 1
 
# Cycle through list
l4 = [1, 9.2, "Ule", True]
while len(l4):
    print(l4.pop(0))

END_LOOP_THREE: int = 6
i: int = 1
while i < END_LOOP_THREE:
  print(i)
  i += 1
else:
  print("i is no longer less than 6")
```

## For Loop

For loops are used to iterate over sequences. They are really useful when utilised in conjunction with collections.

```python
# For Loop
# Allows you to perform an action a set number of times
# Range performs the action 10 times 0 - 9
# end="" eliminates newline

for x in range(0, 10):
    print(x, ' ', end="")
print('\n')
 
# Cycle through list
l4 = [1, 9.2, "Ule", True]
for x in l4:
    print(x)
 
#You can also define a list of numbers to
# cycle through
for x in [2, 4, 6]:
    print(x)

# You can double up for loops to cycle through lists
numList: list[list[int]] = [[1, 2, 3], [10, 20, 30], [100, 200, 300]]

for l in numList:
    for el in l:
        print(el)
```

## Iterators

Iterators are objects that contain countable values and will return a value at the time.

```python
# ----- ITERATORS -----
# You can pass an object to iter() which returns
# an iterator which allows you to cycle thru a list
l5: list[int] = [6, 9, 12]
itr = iter(l5)
print(next(itr))  # Grab next value
 
# ----- RANGES -----
# The range() function creates integer iterables
print(list(range(0, 5)))
 
# You can define step
print(list(range(0, 10, 2)))
 
for x in range(0, 3):
    for y in range(0, 3):
        print(numList[x][y])
```


[PREV: Conditionals](./tutorials/python/python-intro-conditionals)

[NEXT: Files](./tutorials/python/python-intro-files)