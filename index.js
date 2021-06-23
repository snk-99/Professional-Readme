// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    // Name of your project
    {
        type: 'input',
        name: 'title',
        message: 'Your Project Title? (Required)',
        validate: (titleInput) => {
            if (titleInput) {
                return true;
            } else {
                console.log('Title needed!');
                return false;
            }
        }
    },

    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short explanation (Required)',
        validate: (descriptionInput) => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Description!');
                return false;
            }
        }
    },
    
    //Installation
    {
        type: 'input',
        name: 'installation',
        message: 'Steps required to install your project? (Required)',
        validate: (installationInput) => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation!');
                return false;
            }
        }
    },
    //Usage
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. (Required)',
        validate: (usageInput) => {
            if (usageInput) {
                return true;
            } else {
                console.log('Usage!');
                return false;
            }
        }
    },
   //test
    {
        type: 'input',
        name: 'test',
        message: 'write tests for your application.',
        validate: (testInput) => {
            if (testInput) {
                return true;
            } else {
                console.log('Testing!');
                return false;
            }
        }
    },
    // license
    {
        type: 'checkbox',
        name: 'licensing',
        message: 'Choose licensing for your project',
        choices: ['MIT License','GNU General Public License v3.0','Apache License 2.0'],
        validate: (licenseInput) => {
            if (licenseInput){
                return true;
            }else{
                console.log('You must choose a license for the project');
                return false;
            }
        }
    },  
    //email
    {
        type: 'input',
        name: 'email',
        message: 'enter your email address.',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } 
        }
    },
    //github
    {
        type: 'input',
        name: 'github',
        message: 'enter your github.',
        validate: (emailInput) => {
            if (emailInput) {
                return true;
            } 
        }
    }
    

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Success! README.md created ')
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
