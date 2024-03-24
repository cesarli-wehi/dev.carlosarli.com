---
title: "Setting up the views"
date: "2024-03-3"
category: "Guides"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "The actual stuff we will see"
---

# The Views

1.  Create a new folder in your app called views
2.  create a new file in that folder called index.mustache, this will be your homepage
3.  create a new file called layout.mustache, this will be your main application layout 
    - in it we can define the application shell like so

    ```html
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{{ title }}</title>
        <link rel="stylesheet" href="css/bootstrap.min.css" />
      </head>
      <body>
        {{> navbar}} 
        {{{ body }}}
      </body>
    </html>
    ```


[PREV: Getting Started](./tutorials/getting-started)


