# Express Environments

An environment variable is a variable whose value is set **outside** the program, typically through functionality built into the operating system or microservice. An environment variable is made up of a name/value pair. The primary use case for environment variables is to limit the need to modify and re-release an application due to changes in configuration data.

## Dotenv
Let's create two env variables `MULTIPLIER` and `DEBUG`! 

### Install `dotenv` 
- `npm i dotenv` to install the package
- Create `.env` file in the root directory of your repo 
- Create two env varialbes: `MULTIPLIER` with the value 2, `DEBUG` with the value 'true'
- In `index.js`, please import and do the initial setup to use the package. See [DOTENV DOC](https://www.npmjs.com/package/dotenv) for help

## Task 1: Logging Middleware
- Write a middleware that shows the current route on terminal.
- This logging works only if an env variable called `DEBUG` is true. 

## Task 2: Constant Value
- In `index.js`, please write an endpoint `multiply/:number` using app.get(). 
- Use the env vairable `MULTIPLIER`.  
- The endpoint should show the result of `number * MULTIPLIER`.

### Task 3: Error Handler
- When an unspecified endpoint is given, there should be an error message with status 404 'Route Unknown'.
- default error status is 400.

### Task 4: Deploy
- Have this repo on your own github account & deploy it via `render.com` web service  
