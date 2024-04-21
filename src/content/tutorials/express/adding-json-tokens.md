---
title: "Web Tokens"
date: "2024-04-21"
category: "Express"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "How do we know if users are logged in"
order: 7
---

# The JSON web token


- to avoid having to check the database every time if a user is logged in, which would be computationally expensive, we can create a token for the user that let's the server know if the user has logged in.

-A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. They contain:
    - Header: The header typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA.
    - Payload: The second part of the token is the payload, which contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims.
    - Signature: To create the signature part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

- we can create a json web token in our application using the jwt library

- first we need to install the jsonwebtoken library:
    ```bash
    npm i jsonwebtoken
    ```

- then we can import it in our queries `users.js`
    ```javascript
    const jwt = require("jsonwebtoken");
    ```

- in our `.env` file we can add a field for `JWT_SECRET` and put in a long random string

- then in our login method we can implement the token generation when we log the user in 
    ```javascript
    try {
        const user = await db.query("SELECT * FROM users WHERE email = $1", [
        email,
        ]);
        if (await bcrypt.compare(password, user[0].password)) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        res.status(200).json({ token });
        } else {
        res.render("login", {
            title: "Login",
            layout: "layout",
            error: "Invalid credentials",
        });
        }
    } catch (error) {
        res.render("login", {
        title: "Login",
        layout: "layout",
        error: "Error logging in",
        });
    }
    ```

- now when we login we can see the token, to see what's in it you can go to `jwt.io` paste it in and see the info inside

## using the token

- now that we have a token let's login and create a method to check if the user is logged in
    ```javascript
    const isLoggedIn = (req, res, next) => {
        //let's get the cookie
        const token = req.cookies['token'];
        //check if the cookie existst
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        //verify the cookie is legit
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
            return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }

            // if everything is good, save the request for use in other routes
            req.userId = decoded.id;
            next();
        });
    };
    ```

- now we can use this middleware to see if we can access the route

- let's see if it works, just for fun i created a secret route that you can only access if you've logged in
    ```javascript
    router.get('/secret-route', isLoggedIn, (req, res) => {
        // If the middleware 'isLoggedIn' does not send a response, 
        // that means the user is authenticated and we can show them some private data.
        res.status(200).send({ message: 'Welcome to the secret route!' });
    });
    ```
- if we try this we get an error because there is no token, we need to go back to our login and create the cookie 
    ```javascript
    if (await bcrypt.compare(password, user[0].password)) {
        const token = jwt.sign({ email }, process.env.JWT_SECRET);
        console.log(token);
        //let's set a cookie with the token
        res.cookie('token', token, { httpOnly: true });

        res.status(200).json({ token });
    } 
    ```

now it should work