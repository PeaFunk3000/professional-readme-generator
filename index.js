const inquirer = require("inquirer");
const fs = require("fs");

// questions for node terminal user input
inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "title",
    },
])