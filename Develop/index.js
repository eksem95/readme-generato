// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title'
},
{
    type: 'input',
    message: 'what is the link to the live deployment?',
    name: 'link'
},
{
    type: 'input',
    message: 'write a description for you project',
    name: 'description'
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writing to file");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    fs.writeFile('readme.md', 
        ``,
    function (err) {
        if (err) throw err;
        console.log('Created!');
      }));

}

// Function call to initialize app
init();
