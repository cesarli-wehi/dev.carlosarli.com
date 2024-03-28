---
title: 4.Python Intro - Collections
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-collections.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 4
---
## What are collections?

Collections are special python containers used to store data in an organised fashion. 

Python ships with 4 main types of collections or data structures: Lists, Tuples, Sets and Dictionaries. Each has their uses, pros and cons and we'll go through each one here.

## Ordered, Mutable and Unique

Before we get started it is important to get some basic concepts and terminology down:

### Ordered vs Unordered

A collection is said to be ordered if the elements inside the collection are stored in a precise and consistent order. If that is not the case the collection is said to be unordered.

For example, in real life a jar of jellybeans could be considered an unordered collection while your record collection could be considered an ordered one. In other words if the position of an item in a collection is important, maybe because you want to know where it is at any time to retrieve it, you want an ordered collection; if not then unordered will do.

In general unordered collections work better for certain tasks and might perform faster than ordered ones, as we'll see later .

### Mutable vs Immutable

A mutable object, in this case a collection is an object whose value can be changed. An immutable one is one whose value cannot be changed.

For example the jelly bean jar would be mutable as you are allowed to add or more likely remove jelly beans from it. An immutable example could be the list of ingredients to make a Carbonara. Sure you could change the pecorino for parmesan and the guanciale for bacon, but it wouldn't really be a Carbonara anymore. Seriously. 

## Unique

A collection is unique if values inside the collection cannot repeat. Say for instance a list of your past partners, you want that to be unique, no sequels, I'm serious dude move on...

## Lists

Lists are ordered and mutable and probably the most versatile collections in python.

```python
# ----LISTS---

# Lists can contain mutable pieces of data of
# varying data types or even functions
l1 = [1, 4.7, "Carlo", False]
 
# Get length
print("Length ", len(l1))
 
# Get value at index
print("1st", l1[0])
print("Last", l1[-1])
 
# Change value
l1[0] = 2
 
# Change multiple values
l1[2:4] = ["Bob", False]
 
# Insert at index without deleting
# Also l1.insert(2, "Paul")
l1[2:2] = ["Paul", 9]
 
# Add to end (Also l1.extend([5, 6]))
l2 = l1 + ["Egg", 4]
 
# Remove a value
l2.remove("Paul")
 
# Remove at index
l2.pop(0)
print("l2", l2)
 
# Add to beginning (Also l1.append([5, 6]))
l2 = ["Egg", 4] + l1
 
# Multidimensional list
l3 = [[1, 2], [3, 4]]
print("[1, 1]", l3[1][1])
 
# Does value exist
print("1 Exists", (1 in l1))
 
# Min & Max
print("Min ", min([1, 2, 3]))
print("Max ", max([1, 2, 3]))
 
# Slice out parts
print("1st 2", l1[0:2])
print("Every Other ", l1[0:-1:2])
print("Reverse ", l1[::-1])


# Static type list 

statList: list[int] = [1] 
```

## Tuples

Tuples are immutable lists

```python
# Tuples

# Tuples are just like lists except they are
# immutable
t1 = (1, 3.14, "Carlo", False)
 
# Get length
print("Length ", len(t1))
 
# Get value / values
print("1st", t1[0])
print("Last", t1[-1])
print("1st 2", t1[0:2])
print("Every Other ", t1[0:-1:2])
print("Reverse ", t1[::-1])

# static type tuple

statTuple: tuple[str, str] = ('a', 'b')
```

## Dictionaries

Dictionaries are mutable, ordered,  lists of key - value pairs. They are based on hash tables and are really useful to store data where the relationship between two elements is important.

```python
# Dictionaries are lists of key / value pairs
# Keys and values can use any data type
# Duplicate keys aren't allowed
heroes = {
    "Superman": "Clark Kent",
    "Batman": "Bruce Wayne",
    "Spiderman": "Peter Parker"
}
 
villains = dict([
    ("Lex Luthor", "Lex Luthor"),
    ("Loki", "Loki")
])
 
print("Length", len(heroes))
 
# Get value by key
# Also heroes.get("Superman")
print(heroes["Superman"])
 
# Add more
heroes["Hulk"] = "Bruce Banner"
 
# Change a value
heroes["Hulk"] = "Joe Pesci"
 
# Get list of tuples
print(list(heroes.items()))
 
# Get list of keys and values
print(list(heroes.keys()))
print(list(heroes.values()))
 
# Delete
del heroes["Hulk"]
 
# Remove a key and return it
print(heroes.pop("Batman"))
 
# Search for key
print("Spiderman" in heroes)

# static type dict
d1: dict[str, str] = {'a': 'a'}
d2: dict[str, int] = {'a': 2}
```

## Sets and Frozensets

Sets are unordered, unique lists with immutable values. Frozensets are the immutable version of sets, like tuples are for lists.

```python
# Sets are lists that are unordered, unique
# and while values can change those values
# must be immutable

s1 = set(["Carlo", 1])
 
s2 = {"Sami", 1}
 
# Size
print("Length", len(s2))
 
# Join sets
s3 = s1 | s2
print(s3)
 
# Add value
s3.add("Ule")
 
# Remove value
s3.discard("Carlo")
 
# Remove random value
print("Random", s3.pop())
 
# Add values in s2 to s3
s3 |= s2
 
# Return common values (You can include multiple
# sets as attributes)
print(s1.intersection(s2))
 
# All unique values
print(s1.symmetric_difference(s2))
 
# Values in s1 but not in s2
print(s1.difference(s2))
 
# Clear values
s3.clear()
 
# Frozen sets can't be edited
s4 = frozenset(["Sami", 7])

# static type set
s1: set[str] = {"Paul"}
```

## Lists vs Tuples vs Dicts vs Sets

```python
""" list vs set vs tuple vs dict """

# lists are the most generic and therefore versatile collection type, 
#they are mutable, indexable and ordered.

# tuples are like lists, but are immutable 
#(they can't be changed i.e. adding values etc...). 
#Tuples are ordered and indexable, but by their immutable 
#nature they are faster and occupy less space in memory

# use tuples when you know the data 
#inside will not need to change i.e. a person's anagraphical details

personDeets: tuple[str, str, int] = ('Sami', 'Ule', 24)

# tuples by being immutable also remove the issue of potential aliasing. 
#aliasing happens when one variable is assigned (=) to another. 
#while this can be useful, it has side effects

# consider this example:

list1: list[int] = [1,2,4,5]
list2 = list1
list2.insert(2, 3)

print(list1)

# otuput [1, 2, 3, 4, 5]
# as you can see we changed list1 while using list 2
# to avoid this we can either use touples instead or user the .copy() method

list1: list[int] = [1,2,4,5]
list2 = list1.copy()
list2.insert(2, 3)

print(list1)
print(list2)

# output [1, 2, 4, 5]   [1, 2, 3, 4, 5]


# using tuples instead 
# btw to declare a tuple of homogenous data you can use the syntax of [type, ...]

tuple1: tuple[int, ...] = (1,2,4,5)
list2: list[int] = list(tuple1) #this is a cast btw :)

list2.insert(2, 3)

print(tuple1)
print(list2)

# output (1, 2, 4, 5)   [1, 2, 3, 4, 5]

# dictionaries are notorious for causing aliasing problems
# speaking of, touples can be used as keys for dictionaries while lists 
#can't as they are mutable

# dictionaries are very useful when the relationship between data is important, 
#let's take our person details example from before and say that knowing the age 
#of a person is important to us

personName: tuple[str, str] = ('Sami', 'Ule')

peopleWithAges: dict[tuple[str, str], int] = {}
peopleWithAges[personName] = 24

print(peopleWithAges)

# output {('Sami', 'Ule'): 24}

print(peopleWithAges.get(personName))

# output 24

# to avoid aliasing with dicts use the copy method as with tuples:

peopleWithAges2 = peopleWithAges.copy()
newPerson: tuple[str, str] = ('Carlo', 'Sarli')
peopleWithAges2[newPerson] = 25

print(peopleWithAges)
print(peopleWithAges2)

#output {('Sami', 'Ule'): 24}  {('Sami', 'Ule'): 24, ('Carlo', 'Sarli'): 25}

# when we look at loops we'll look at more interesting implementations of these

# sets are unordered and mutable, they are very fast but have very specific use. 
#they are great when the important thing is whether an element is in a collection 
#or not
# they are very useful to efficiently find and remove duplicates in a list or tuple

tupleA: tuple[str, ...] = ('u', 'l', 'e', 's', 'a', 'm', 'i', 'u')
setA: set[str] = set(tupleA)

print(tupleA)
print(setA)

#output ('u', 'l', 'e', 's', 'a', 'm', 'i', 'u')
#output {'s', 'l', 'm', 'u', 'a', 'i', 'e'}
# notice how the set is jumbled up and without duplicates
```

## The Aliasing problem

In the above example we also showed a phenomenon called aliasing. Aliasing occurs when a variable is created pointing at another (an alias) and both reference the same data. This is very common with dictionaries.

The issue is that if done unintentionally one might not be aware that while modifying one is modifying the other too. 

To avoid this problem simply use the copy() method when you want to copy the values of one collections, or a slice of one, to another. ez pz Mario and Luigi!


[PREV: Strings](./tutorials/python/python-intro-strings)

[NEXT: Conditionals](./tutorials/python/python-intro-conditionals)