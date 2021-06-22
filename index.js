// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown')
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
     // Name of your project
      {
        type: 'input',
        name: 'title',
        message: 'Your Project Title? (Required)',
        validate: titleInput => {
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
        validate: descriptionInput => {
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
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Installation!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Steps required to install your project? (Required)',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Step-by-step description !');
                return false;
            }
        }
    },
     

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('Success!')
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
