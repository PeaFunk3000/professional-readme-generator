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
    {
      type: "input",
      message: "Repository directory name",
      name: "repo",
    },
    {
      type: "input",
      message: "Project description",
      name: "description",
    },
    {
      type: "input",
      message: "Installation instructions?",
      name: "ins",
    },
    {
      type: "input",
      message: "Usage instructions?",
      name: "usage",
    },
    {
      type: "input",
      message: "Any project test requirements?",
      name: "tests",
    },
    {
      type: "input",
      message: "Any project contributors or credits?",
      name: "credits",
    },
    {
      type: "list",
      message: "Which license type does your project use?",
      name: "license",
      choices: ["MIT", "IBM", "Mozilla", "Perl", "Eclipse", "ISC", "none"],
    },
    {
      type: "input",
      message: "What is your contact email address?",
      name: "contact",
    },   {
      type: "input",
      message: "What is your GitHub username?",
      name: "user",
    }
])
.then((response) => {
    writeDoc(response);
  });

// function to write readme document using template literal and fs.writeFile
function writeDoc(response) {
  var myReadme = `# ${response.title}

  ## Description
  
  ${response.description}
  
  The application:
  
  ${response.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
  - [Contributing](#contributing)
  - [Lisence](#license)
  - [Questions](#questions)`;

  fs.writeFile("yourReadme.md", myReadme, (err) => {
    if (err) console.log(err);
    else {
      console.log("Readme file has been written successfully");
    }
  });
}
