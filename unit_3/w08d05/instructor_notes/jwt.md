# React: Authentication with JWTs

## Learning Objectives

-   Describe JSON web tokens (JWTs)
-   Describe what Passport is
-   Identify parts of JWTs
-   Add JWT authentication with Passport to a MERN app

## Framing

### What is a JSON Web Token?

[Official definition](https://tools.ietf.org/html/rfc7519): compact, URL-safe means of representing claims to be transferred between two parties.

In other words: A JSON web token is JSON-formatted data sent securely between the server and the browser via HTTP requests.

### Authentication with JWTs

The problem that JWTs seek to overcome: HTTP is stateless, but we need a way to tell the server that a user is logged in.

When making requests or performing actions that are only for authorized users, there needs to be a way to keep track of whether a user is logged in, since that information isn't stored in HTTP by nature.

For instance, when we implement Passport for user authentication, we will use **sessions** to remind the server of "logged-in status" with every request made to the server. A **session** is a place to store data on the browser during one request which can be read during later requests. The session is a JS object that allows us to keep track of this information. When a new user signs into an application, we create a new session in the server, and a cookie for this session is sent in a response back to the browser.

In future HTTP requests from the browser, the client sends a session cookie to the server to retrieve the user from the database to then authenticate the authorized interaction with the database (e.g. saving a post, editing data).

Another approach to keeping track of a user being logged in is to use JWTs with Passport. With JWTs, the user info is embedded in a **token**. Upon initial log in, the server creates a JSON "token" to store the user info. These tokens are "signed" by the server, and only the server holds the private key to read the token.

#### How It Works

![JWT vs. Sessions Diagram](https://cdn-images-1.medium.com/max/1600/1*d6YcPvq7TeU0DTamj629xw.png)

1. Client browser makes a request sending user login credentials and password (only has to do this once)
2. Server validates the credentials and sends a JSON response to the client that encodes user login data
3. Client stores this JSON web token
4. When the client sends a request to a route that requires authentication, it will send this token to the API to present its authorization for access

#### Advantages of using JWTs:

-   JWTs are self-contained
    -   You have all the information about the user within the token. After inital request from browser, the server doesn't need to interact with the database to know who the user is. Using JWTs limit database lookups.
-   JWTs are compact, and transmission through HTTP actions is fast.
-   JWTs work the same for browser clients and native mobile apps.

### What does a JWT look like?

A string with three parts, each separated by dots (`.`):

    - header
    - payload
    - signature

#### Header

**Header** is a JSON object consisting of two parts: the type of token (typ) and the hashing algorithm being used on the token (alg).

```
Header example:
{
  "alg": "HS256",
  "typ": "JWT"
}
```

#### Payload

**Payload** is a JSON object containing claims. Claims refer to statements about an entity (e.g. user data). You can put as many claims into the payload as you want, though you want to be cognizant of keeping the JWT compact so as not to impact performance of HTTP actions.

```
Payload example:
{
  "sub": "1234567890",
  "name": "John Doe",
  "userId": "5z-9328477bz"
  "admin": true
}
```

There are three different types of claims: public claims, private claims, and registered claims.

-   **Registered claims** refer to claims that have predetermined key names - e.g. common fields like issuer ("iss"), subject ("sub"), and expiration time ("exp").

-   **Public claims** are claims that we create - e.g. "name", "userId", and "admin" above.

-   **Private claims** are used when JWTs are sent between two parties. Only these two parties know what the claims respresent.

#### Signature

**Signature** is encoded header and payload signed with a secret key.

The header is encoded, and the payload is encoded. They are joined together with a `.` in between. This string is then hashed with the server's secret key, using header's hashing algorithm. This produces a new string, which is added onto the `<header>.<payload>` string with another `.` between.

The signature allows the receiver to ensure that the JWT was sent from an authentic source (the holder of the secret key). This encoding does not serve to encrypt the data, but to transform the data.

> Note: [Refresher on difference between encoding, encrypting, and hashing.](https://danielmiessler.com/study/encoding-encryption-hashing-obfuscation/)

#### Final product

Encoded string vs. decoded JSON:

![JWT: encoded string vs. decoded JSON](https://cdn-images-1.medium.com/max/2000/1*LAo6s2tlszZdk2x-uE1lqA.png)

## Examining Example Backend Application

-   Go to student_examples/JWT_lesson/backend
-   npm i
-   npm run dev

### Walkthrough

-   login route checks username and password (in this case hardcoded) and then generates a new token using jwt.sign(payload, secret)

-   the auth middleware function looks in the header for an "Authorization" header whose values will be "bearer <token>" and then parses out the token and verifies it with jwt.verify(token, secret, callback) then in the call back assigns the payload to the request object for use by the route

-   the test route just responds with a string only if the auth middleware is successful (otherwise sending error code)

## Examining Example frontend Application

-   Go to student_examples/JWT_lesson/frontend
-   npm i
-   npm run dev

### Walkthrough

-   handleChange functions is the standard form handlefunction to sync form data with the state

-   when the login button is clicked the handleLogin function is invoked which makes a post request to the backend. If successful a token is returned which is stored in state and also localStorage for future website visits.

-   the useEffect hooks run when the site loads to check if a token is already stored in localStorage and if so assigns it state.

-   Once a token is in state, the login form dissapears and is replaced with a test and logout button

-   the test button sends a post request to the test route with the token in its authorization header

-   the logout button remove the token from state and localStorage causing the login form to return.

### Additional Resources on using JWTs in MERN apps

-   https://medium.com/@rajaraodv/securing-react-redux-apps-with-jwt-tokens-fcfe81356ea0
-   https://hptechblogs.com/using-json-web-token-react/
-   https://blog.jscrambler.com/implementing-jwt-using-passport/
-   [FAQs: Authentication with tokens (vs cookies)](https://auth0.com/blog/ten-things-you-should-know-about-tokens-and-cookies/#token-oauth)
-   [Using bcrypt](https://jonathas.com/token-based-authentication-in-nodejs-with-passport-jwt-and-bcrypt/)
-   [Passport documentation](http://www.passportjs.org/docs/)
