## Hometap
Example of automated tests with Cypress and JavaScript framework.

### Requirements
On local machine has to be installed:
- Code editor [Visual Studio Code](https://code.visualstudio.com/)
- [Node.js](https://nodejs.org/en/download/package-manager)

> Cypress requires Node.js in order to install and supports **Node.js 18.x, Node.js 20.x and above**

### Running project
1. Download project
2. Import prpoject to Visual Studio Code
3. In Visual Studio terminal run `npm install cypress --save-dev`
4. To start tests, run in terminal: 
- `npx cypress open` to run tests in the browser 
- or `npx cypress run` to execute in the headless mode.

**Notes**  
By expanding this automation code I assume it means to cover other functionality of AUT with e2e tests. In this case, what could be done:

- create custom commands for the most used steps to avoid code duplication;
- connect to database, have it load with specif set of data and set up fixtures so the tests can be repeatable, run from clean state and have a predictable result, especially if there are a lot of veriables and dynamic values like interest rate and monthly payment. Challenging can be to decide what is better choice for database so the tests can be easy to scale (ex, SQLite vs MySql);
- determine when these tests should be run. If they are integrated into pipeline, should the deployment be blocked when tests fail? 



