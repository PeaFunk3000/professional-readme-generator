const inquirer = require("inquirer");
const fs = require("fs");

// questions for node terminal user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Project title",
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
      message: "Installation instructions",
      name: "ins",
    },
    {
      type: "input",
      message: "Usage instructions",
      name: "usage",
    },
    {
      type: "input",
      message: "Project test requirements",
      name: "tests",
    },
    {
      type: "input",
      message: "Project contributors or credits",
      name: "credits",
    },
    {
      type: "list",
      message: "Select license",
      name: "license",
      choices: ["MIT", "IBM", "Mozilla", "Perl", "Eclipse", "ISC", "none"],
    },
    {
      type: "input",
      message: "Contact email address",
      name: "contact",
    },   {
      type: "input",
      message: "GitHub username",
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
  - [Questions](#questions)
  
  
${response.license !== "none" ? `- [License](#license)` : ""}

## Installation

${response.ins}

## Usage

${response.usage}

The repository for this project can be found on my GitHub:

https://github.com/${response.user}/${response.repo}

## Tests

${response.tests}

## Contributing

${response.credits}

${response.license !== "none" ? `## License` : ""}

## Questions

* For any additional questions regarding this project, please contact me on:
${response.contact}

* A link to my GitHub profile:
https://github.com/${response.user}`;

  fs.writeFile("yourReadme.md", myReadme, (err) => {
    if (err) console.log(err);
    else {
      console.log("Readme file has been written successfully");
    }
  });
}
