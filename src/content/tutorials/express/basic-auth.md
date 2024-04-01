---
title: "Basic Auth"
date: "2024-03-6"
category: "Express"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's register a user"
order: 6
---

# Creating the user

1.  in our `queries` folder in our `users.js` file let's create the method to create a user 
2.  but first we need to install two more packages:
    ```bash
    npm i bcrypt
    ```
    ```bash
    npm i jsonwebtoken
    ```
    bcrypt is used to hash the passwords before they are stored in the database. This means that even if someone gains access to your database, they won’t be able to see the users’ actual passwords.

    When a user logs in, they are issued a JWT (JSON web token). This token can then be sent in the header of HTTP requests to authenticate the user for subsequent requests. The server can verify the token and respond with the requested data if the user is authenticated.

3.  to use them we are going to add the following lines:
    ```javascript
    const bcrypt = require('bcrypt');
    const jwt = require('jsonwebtoken');
    //then we will call our db we created 
    const db = require('../db');
    ```
4.  Now we need to create a method to register the user
    ```javascript
    // This is an asynchronous function named 'createUser'. It's exported so it can be used in other parts of your application.
    const createUser = async (req, res) => {
        // Destructuring the 'email' and 'password' properties from 'req.body'. This is where the user's input from the client-side will be passed in.
        const { email, password } = req.body;

        // The 'bcrypt.hash' function is used to hash the password provided by the user. '10' is the number of rounds used for salting. The higher the rounds, the more secure the hash, but the slower the operation.
        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            // This line attempts to insert a new user into the 'users' table in your database. It uses parameterized query to prevent SQL injection attacks. '$1' and '$2' are placeholders for the 'email' and 'hashedPassword' respectively. 'RETURNING *' returns all columns of the inserted row.
            const user = await db.query('INSERT INTO users(email, password) VALUES($1, $2) RETURNING *', [email, hashedPassword]);

            // If the user is successfully created, a status code of 201 (Created) is sent back to the client along with a success message.
            res.status(201).send("user created");
        } catch (error) {
            // If there's an error during the operation (like the email already exists), a status code of 500 (Internal Server Error) is sent back to the client along with an error message.
            res.status(500).send("error creating user");
        }
    }

    module.exports = {
        createUser
    };
    ```   

# Creating the register view and the form

1. in my views folder we're going to create a `register.mustache` file and in it place our form:
   ```html
   <div class="container-fluid">
        <h2>Registration Form</h2>
        <form action="/register" method="POST">
            <div class="form-group">
                <label for="email">Email</label>
                <input type="text" class="form-control" id="email" name="email" placeholder="Enter email" required>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
            </div>
            <button type="submit" class="btn btn-primary mt-2">Submit</button>
        </form>
    </div> 
    ```
2. then in my `routes/index.js` i will create a new route:
   ```javascript
   router.get("/register", function (req, res, next) {
    res.render("register", { title: "Register", layout: "layout" }); // Make sure 'layout' is the correct name of your layout file without the extension
    });
    ```
    If i now put `http://localhost:3000/register` i should see my form

3. in our form we put an `action` of `/register` and a `method` of post which means that when the user will click the submit button we will do a `post` on the `/register` route so we need to implement that next:
   ```javascript
   //at the top let's import our queries
   const { createUser } = require('../queries/users');
   //then we create our route
   app.post('/register', createUser);
   ```
4. If we go back to pg admin we should be able to see our newly crated user



[PREV: Connecting to the DB](./tutorials/express/connecting-to-the-db)


