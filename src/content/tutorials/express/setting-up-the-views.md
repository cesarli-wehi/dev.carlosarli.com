---
title: "Setting up the views"
date: "2024-03-4"
category: "Express"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "The actual stuff we will see"
order: 4
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
        <!--This is a partial --->
        {{> navbar}} 
        <!--This will be our main content --->
        {{{ body }}}
        {{> footer}}
      </body>
    </html>
    ```
4. to create your partials that will be displayed in every page like the footer and navbar simply add a navbar.mustache file to your views and write it so 
  ```html
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="about">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Action</a></li>
              <li><a class="dropdown-item" href="#">Another action</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              >Disabled</a
            >
          </li>
        </ul>
        <form class="d-flex">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  ```
  this is just an example from bootstrap you can put in your own

5. to crate a new page add an about.mustache page to the views folder and add your html code in it
  ```html 
  <div class="container">
    <h1>{{ title }}</h1>
    <p>
      Welcome to our website! We are a team of passionate developers dedicated to
      creating the best web applications. Stay tuned for more updates.
    </p>
  </div>
  ```
  if you see we have our html and a parameter {{title}} we will look more at that later in the routing section

6. speaking of, let's add a route to get to our new page 
  ```javascript   
  //routes/index.js
  router.get("/about", function (req, res, next) {
   res.render("about", { title: "About Us", layout: "layout" }); 
  });
  ```
  now if we navigate to our app /about we will see our about page



[PREV: Getting Started](./tutorials/express/getting-started)

[NEXT: Connecting to the DB](./tutorials/express/connecting-to-the-db)


