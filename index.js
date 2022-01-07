const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Title for your project:',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description for your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Installation instructions for your project:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage instructions for your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'License your project is using:',
        choices: ['apache', 'mit', 'GPLv2', 'Other']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contribution information for your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests for your project:',
    },
    {
        type: 'input',
        name: 'githubUser',
        message: 'Your GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email:',
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => {
            writeToFile('./dist/README.md', data);
        });
}

// Function call to initialize app
init();
