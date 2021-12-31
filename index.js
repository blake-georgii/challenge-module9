const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'input',
        name: 'repo',
        message: 'What is your repository name?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what lsicinaiwc',
        choices: ['apache', 'mit']
    }
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
