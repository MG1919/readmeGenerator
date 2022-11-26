// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input

// import generateMarkdown from "./utils";
const inquirer = require("inquirer");
const fs = require("fs");
const { default: Choices } = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown");
const questions = [
  {
    type: "input",
    message: "What is your GitHub user name?",
    name: "username",
  },

  {
    type: "input",
    message: "What is your project called?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Please provide a short description of your project.",
    name: "description",
  },
  //Description, Installation, Usage, Contributing, and Tests, license, email address
  {
    type: "input",
    message: "Please provide the installation instructions for this app.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please outline the usage of this program.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please outline the contributions for ths program.",
    name: "contributions",
  },
  {
    type: "input",
    message: "What command do you use to run tests?",
    name: "test",
  },
  {
    type: "list",
    message: "What license does this have?",
    name: "license",
    choices: ["Apache_2.0", "Mozilla_2.0", "GNU_GPL_v3", "IBM", "Boost", "MIT"],
  },
  {
    type: "input",
    message: "What is your E-mail address?",
    name: "email",
  },
];

// const data = JSON.stringify(response);

// // TODO: Create a function to write README file
// function writeToFile(README, generateMarkdown(data)) {

// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    fs.writeFileSync("./dist/README.md", generateMarkdown(response));
  });
}

// Function call to initialize app
init();
