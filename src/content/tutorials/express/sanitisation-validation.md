---
title: "Validation & Sanitisation"
date: "2024-04-16"
category: "Express"
mainImage: "/images/tutorials.webp"
authorImage: "https://res.cloudinary.com/wehi-web-design-ltd/image/upload/v1698242293/carlosarli.com/photo/image0.jpg"
authorName: "Carlo Sarli"
authorRole: "Teaching Fellow - Technocamps"
description: "Let's validate and sanitise the user inupts"
order: 7
---

# Validation

1.  Validation is the process of checking that the data entered by the the users is in a correct format
2.  there are two types of validation:
    - Client-side validation: This is done in the user’s browser. It’s a quick way to check if the input data is correct and allows for immediate feedback to the user. However, it can be bypassed by the user or may not work if the user has disabled JavaScript in their browser.
    - Server-side validation: This is done on the server after the data has been submitted. It’s a more secure form of validation as it can’t be bypassed by the user. It’s used to catch validation errors that weren’t caught on the client side.

3. in forms validation can check for several parameters:
    - Required fields: Checking that all required fields have been filled in.
    ```html
    <form>
        <label for="name">Name:</label><br>
        <input type="text" id="name" name="name" required><br>
        <input type="submit" value="Submit">
    </form>
    ```
    - Format checks: Checking that data is in the right format (e.g., email addresses should include an ‘@’ symbol and a domain).
    ```html
    <form>
        <label for="email">Email:</label><br>
        <input type="email" id="email" name="email" required><br>
        <input type="submit" value="Submit">
    </form>
    ```
    - Range checks: Checking that numerical data falls within a certain range.
    ```html
    <form>
        <label for="age">Age:</label><br>
        <input type="number" id="age" name="age" min="1" max="100" required><br>
        <input type="submit" value="Submit">
    </form>
    ```
    - Size checks: Checking that the data doesn’t exceed a certain length.
    ```html
    <form>
        <label for="username">Username:</label><br>
        <input type="text" id="username" name="username" maxlength="15" required><br>
        <input type="submit" value="Submit">
    </form>
    ```

4. for server side validation we can use a library called `validator` and we can install it so:
    ```bash
    npm install validator
    ```
5. some example usage of the validator in action 
    ```javascript
    const validator = require("validator");

    /**
    * Creates a new user in the database.
    * @param {Object} req - The request object.
    * @param {Object} res - The response object.
    * @returns {Promise<void>} - A promise that resolves when the user is created.
    */
    const createUser = async (req, res) => {
        let { email, password } = req.body;

        if (!validator.isEmail(email)) {
            return res.status(400).send("Invalid email");
        }

        const userExists = await db.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        if (userExists.rows.length > 0) {
            return res.status(400).send("user already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await db.query(
            "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *",
            [email, hashedPassword]
            );
            res.status(201).send("user created");
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    ```

# Sanitisation


1.  sanitisation is the process of cleaning or scrubbing user input to prevent it from causing harm to the application, database, or other users.
    Sanitisation involves removing or replacing characters in the user input that have special meanings in certain contexts, to prevent attacks such as SQL injection or Cross-Site Scripting (XSS). For example, in an HTML context, you might replace < and > with their HTML entities (&lt; and &gt;) to prevent the user input from being interpreted as HTML code.
2. we can sanitise our app using the package `sanitize-html` installing it like so:
    ```bash
    npm i sanitize-html
    ```
3. and we can use it to sanitise inputs in our application like this:
    ```javascript
    const sanitize = require("sanitize-html");
    const validator = require("validator");

    /**
    * Creates a new user in the database.
    * @param {Object} req - The request object.
    * @param {Object} res - The response object.
    * @returns {Promise<void>} - A promise that resolves when the user is created.
    */
    const createUser = async (req, res) => {
        let { email, password } = req.body;
        //sanitise the inputs before using them for any operations
        email = sanitize(email);
        password = sanitize(password);

        if (!validator.isEmail(email)) {
            return res.status(400).send("Invalid email");
        }

        const userExists = await db.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        if (userExists.rows.length > 0) {
            return res.status(400).send("user already exists");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        try {
            const user = await db.query(
            "INSERT INTO users(email, password) VALUES($1, $2) RETURNING *",
            [email, hashedPassword]
            );
            res.status(201).send("user created");
        } catch (error) {
            res.status(500).send(error.message);
        }
    };
    ```



[PREV: Basic Auth](./tutorials/express/basic-auth)


