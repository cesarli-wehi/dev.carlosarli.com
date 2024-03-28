---
title: 7.Python Intro - Files
date: "2024-03-28"
category: "Python"
mainImage: "/images/tutorials/python/python-intro-files.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Setting up the development environment for the course"
order: 7
---
## Files

A brief tutorial on how to read in data from files. 

To setup this project we have a root directory with a files directory containing 2 files: test.txt and names.csv which are at the bottom of this tutorial.



```python
import os
#select current dir
currentDir = os.path.dirname(__file__)
currentDir = os.path.join(currentDir, 'files' )
#our file name
tFile: str = "test.txt"
#create absolute path to file
absFilePath: str = os.path.join(currentDir, tFile)
#oper file reader in read mode
f = open(absFilePath, 'r')
#print file name
print(f.mode)

#close file reader  !! very important
f.close()

#context manager automatically closes file for us
with open(absFilePath, 'r') as ff:
    # ffContents = ff.read()
    # print(ffContents)
    # select size of read in characters
    #SIZE: int = 100
    #ffContents = ff.read(SIZE)

    #read one line nad move to the next
    # ffLine = ff.readline()
    # print(ffLine)

    #read all lines
    # ffLines = ff.readlines()
    #this is a list of all the lines
    # print(ffLines)

    #read all lines using for loop
    for line in ff:
        print(line, end='')


""" csv """

import csv

#our file name
cFile: str = "names.csv"
#create absolute path to file
absFilePath: str = os.path.join(currentDir, cFile)
#open file
with open(absFilePath, 'r') as csvFile:
    csvReader = csv.reader(csvFile)
    #csv.reader(file, delimeter=";") to change delimiter

    print(csvReader)
    #just an object in memory

    #skip header  (remember iterators? :)
    next(csvReader)
    #loop to read
    for line in csvReader:
        print(line)
        # notice that line is a list already
```



### test.txt

```
1) This is a test file
2) With multiple lines of data...
3) Third line
4) Fourth line
5) Fifth line
6) Sixth line
7) Seventh line
8) Eighth line
9) Ninth line
10) Tenth line
```

### names.csv

```
first_name,last_name,email
John,Doe,john-doe@bogusemail.com
Mary,Smith-Robinson,maryjacobs@bogusemail.com
Dave,Smith,davesmith@bogusemail.com
Jane,Stuart,janestuart@bogusemail.com
Tom,Wright,tomwright@bogusemail.com
Steve,Robinson,steverobinson@bogusemail.com
Nicole,Jacobs,nicolejacobs@bogusemail.com
Jane,Wright,janewright@bogusemail.com
Jane,Doe,janedoe@bogusemail.com
Kurt,Wright,kurtwright@bogusemail.com
Kurt,Robinson,kurtrobinson@bogusemail.com
Jane,Jenkins,janejenkins@bogusemail.com
Neil,Robinson,neilrobinson@bogusemail.com
Tom,Patterson,tompatterson@bogusemail.com
Sam,Jenkins,samjenkins@bogusemail.com
Steve,Stuart,stevestuart@bogusemail.com
Maggie,Patterson,maggiepatterson@bogusemail.com
Maggie,Stuart,maggiestuart@bogusemail.com
Jane,Doe,janedoe@bogusemail.com
Steve,Patterson,stevepatterson@bogusemail.com
Dave,Smith,davesmith@bogusemail.com
Sam,Wilks,samwilks@bogusemail.com
Kurt,Jefferson,kurtjefferson@bogusemail.com
Sam,Stuart,samstuart@bogusemail.com
Jane,Stuart,janestuart@bogusemail.com
Dave,Davis,davedavis@bogusemail.com
Sam,Patterson,sampatterson@bogusemail.com
Tom,Jefferson,tomjefferson@bogusemail.com
Jane,Stuart,janestuart@bogusemail.com
Maggie,Jefferson,maggiejefferson@bogusemail.com
Mary,Wilks,marywilks@bogusemail.com
Neil,Patterson,neilpatterson@bogusemail.com
Corey,Davis,coreydavis@bogusemail.com
Steve,Jacobs,stevejacobs@bogusemail.com
Jane,Jenkins,janejenkins@bogusemail.com
John,Jacobs,johnjacobs@bogusemail.com
Neil,Smith,neilsmith@bogusemail.com
Corey,Wilks,coreywilks@bogusemail.com
Corey,Smith,coreysmith@bogusemail.com
Mary,Patterson,marypatterson@bogusemail.com
Jane,Stuart,janestuart@bogusemail.com
Travis,Arnold,travisarnold@bogusemail.com
John,Robinson,johnrobinson@bogusemail.com
Travis,Arnold,travisarnold@bogusemail.com
```

[PREV: Loops](./tutorials/series/python/python-intro-loops)

[NEXT: Methods](./tutorials/series/python/python-intro-methods)