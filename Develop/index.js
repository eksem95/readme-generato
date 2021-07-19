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
},
{
    type: 'input',
    message: 'What are the steps to install this app?',
    name: 'install'
},
{
    type: 'input',
    message: 'What is the usage of this app?',
    name: 'usage'
},
{
    type: 'input',
    message: 'What license are you using?',
    name: 'license'
},
{
    type: 'input',
    message: 'How can people contribute to this app?',
    name: 'contributing'
},
{
    type: 'input',
    message: 'How do you test this app?',
    name: 'tests'
},
{
    type: 'input',
    message: 'What is your github username?',
    name: 'github'
},
{
    type: 'input',
    message: 'What is your email?',
    name: 'email'
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log("writing to file");
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((response) => 
    fs.writeFile('readme.md', 
        `# ${response.title}
        Table of Contents:
        Link to live depoyment: ${response.link}
        Description: ${response.description}
        Installation Guide: ${response.install}
        Usage: ${response.usage}
        License: ${response.license}
        How can you contribute? ${response.contributing}
        Tests: ${response.tests}
        For Questions, please contact: ${response.github}, ${response.email}`,
    function (err) {
        if (err) throw err;
        console.log('Created!');
      }));

}

// Function call to initialize app
init();
