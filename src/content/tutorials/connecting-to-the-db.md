---
title: "Connecting to the db"
date: "2024-03-5"
category: "Guides"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's start building our database"
---

# Creating the Database

1.  Open pg admin
2.  insert your password
3.  expand the servers tab
4.  right click on databases and create a new database
5.  name it whatever you want I named mine unit4
6.  click save
7.  right click on the database and click on query tool
8.  let's create the user table by running the following query
    ```sql
    CREATE TABLE users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(50),
      password VARCHAR(100)
    );
    ```
9.  press f5 or the play button to run the query
10. now if the query was successful you should see a new table in the tables tab under schemas. you can right click it to show all data here we will be able to see our users

# Connecting to the Database

1. in our project let's install dotenv to allow us to store credentials securely in our app running
  ```bash
   npm i dotenv
  ```
2. create now a file called `.env` 
3. in it we wil start storing our db credentials, you will have to put your ones not mine like so:
  ```json
  # Database
  DB_HOST="localhost"
  DB_PORT="5432"
  DB_NAME="unit4"
  DB_USER="postgres"
  DB_PASS="postgres"
  ```
1. now we will install the libraries to access the db by doing 
  ```bash
  npm i pg-promise
  ```  
2. in our project folder we will create a new folder called `queries` and in there we will create a new file called `users.js`
3. then we will create a new file at root level called db.js we will add the following code for now 
  ```javascript
  const pgp = require('pg-promise')(/* options */)
  const db = pgp({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT,
  });

  //plus this to test 
  // Test database connection
  db.query('SELECT NOW()')
      .then(res => {
          console.log('Connected to the database', res[0]);
      })
      .catch(err => {
          console.error('Error executing query', err.stack);
      });

  module.exports = db;
  ```
  this code will take in our credentials from the `.env` file and create the connection to the database and will print to the console if we are connected to the db when initialised


[PREV: Setting Up the Views](./tutorials/setting-up-the-views)

[NEXT: Basic Auth](./tutorials/basic-auth)

