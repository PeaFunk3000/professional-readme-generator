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
  ${response.license !== "none" ? `- [License](#license)` : ""}
  - [Questions](#questions)
  

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
${getBadge(response.license)}

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

// function to getBade img using switch statement
function getBadge(license) {
    switch (license) {
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      case "Mozilla":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
      case "IBM":
        return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
      case "Perl":
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)]";
      case "ISC":
        return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      case "Eclipse":
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
      case "none":
        return "";
    }
  }