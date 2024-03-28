---
title: "Getting Started"
date: "2024-03-3"
category: "Express"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's get this party started"
order: 3
---

# Let's get up and running

1. Open VS code
2. Click File open folder and select the folder where you want to initialise your project
3. use ctrl/cmd + ` to open the local terminal
4. type in
   ```bash
   npm init
   ```
   ```bash
   npm i express
   ```
   ```bash
   npx express-generator {{name of your app without braces}} --no-view
   ```
5. cd into the analog-demo folder by typing
   ```bash
   cd {{name of your app}}
   ```
   then run
   ```bash
   npm i mustache-express
   ```
   ```bash
   npm i boostrap
   ```
   ```bash
   npm i nodemon
   ```
   then open your package.json file in the {{your app}} folder and where it says
   ```json
    "scripts": {
        "start": "node ./bin/www"
    },
   ```
   change it to
   ```json
    "scripts": {
        "start": "nodemon app.js"
    },
   ```
   now we don't have to restart the server at every change
6. open the file app.js and find the line that says
   ```javascript
   var express = require("express");
   ```
   and add these lines under it
   ```javascript
   const mustacheExpress = require("mustache-express");
   ```
7. in the same file find the line that says
   ```javascript
   var app = express();
   ```
   and add these lines under it
   ```javascript
   app.engine("mustache", mustacheExpress());
   app.set("view engine", "mustache");
   app.set("views", __dirname + "/views");
   ```
8. to use boostrap we will add these lines 
   ```javascript
   app.use(express.static(path.join(__dirname, "public"))); //this line is already there
   app.use(express.static(__dirname + "/node_modules/bootstrap/dist"));
   ```
9. to make sure our views will work we will add this code just before this line 
   ```javascript
   app.use((req, res, next) => {
   const originalRender = res.render;
   res.render = function (viewName, options = {}, callback) {
      // Render the view first
      originalRender.call(this, viewName, options, (err, html) => {
         if (err) {
         return callback(err);
         }
         // Then, render the layout with the view's HTML
         originalRender.call(this, "layout", { ...options, body: html }, callback);
      });
   };
   next();
   });
   //these lines are already there we need to add the code before
   app.use("/", indexRouter);
   app.use("/users", usersRouter);
   ```

10. in the same file at the bottom before the line
   ```javascript
   module.exports = app;
   ```
   add these lines before it
   ```javascript
   app.listen(3000, function () {
     console.log("Server is running on port 3000");
   });
   ```
11. use
   ```bash
   npm start
   ```
   to run the program

[PREV: IDE Setup](./tutorials/express/ide-setup)

[NEXT: Setting up the views](./tutorials/express/setting-up-the-views)
