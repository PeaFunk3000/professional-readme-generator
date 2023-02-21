# professional-readme-generator

## Description

This project encapsulates a command-line application that dynamically generates a professional README.md file from a user's input, using the Inquirer package.

* User Story
As a developer, I want a README generator so that I can quickly create a professional README for a new project.

* Application Functionality
    
    When a user is prompted for information about the application repository then a high-quality, professional README.md is generated with:
    * The title of my project 
    * Sections entitled:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions
    
    * When a user enters the project title then it is displayed as the title of the README
    * When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
    * When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled **License** that explains which license the application is covered under
    * When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
    * When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
    * When a user clicks on the links in the **Table of Contents** then they are taken to the corresponding section of the README

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

Simply clone this open source project repository to your local device and invoke within the project Visual Studio Code terminal, or your preferred terminal of choice, using:

$ node index.js

## Usage

The application is a command-line application and is invoked by using the following command:

$ node index.js

You will then be given a series of user prompts for information about your application repository. Once completed your high-quality, professional README.md is generated with:

    * The title 
    * Sections:
      * Description 
      * Table of Contents 
      * Installation 
      * Usage 
      * License 
      * Contributing 
      * Tests 
      * Questions 

A walkthrough video can be found at: 
<br>
https://watch.screencastify.com/v/g7Bbh0S498nDX5j6AR3x
<br>
The repository for this project can be found on my GitHub:
<br>
https://github.com/PeaFunk3000/readme-generator
<br>

## Credits

N/A

## License

MIT License

