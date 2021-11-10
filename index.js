const inquirer = require('inquirer');

const fs = require('fs');

const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const Manager = require("./lib/Manager");

const Engineer = require("./lib/Engineer");

const Intern = require("./lib/Intern");


var managerCard = ``

var engineerCard = ``

var internCard = ``

const prompt = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "addNext",
            message: "Which team member role would you like to add?",
            choices: ["Manager", "Engineer", "Intern", "None"],
        }
    ]).then((answers) => {
         if (answers.addNext === "Manager") {
            addManager()
        }

        if (answers.addNext === "Engineer") {
            addEngineer()
        }

        if (answers.addNext === "Intern") {
            addIntern()
        }
       
        if (answers.addNext === "None") {
            writeFileAsync('index.html', renderHTML()).then(console.log("index.html rendered"))
        }
    })
}

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the manager's email?",
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?",
        },
    ]).then((answers) => {
        prompt();
        createManagerCard(answers)
    })
}

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the engineer's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the engineer's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the engineer's email?",
        },
        {
            type: "input",
            name: "github",
            message: "What is the engineer's Github username?",
        },
    ]).then((answers) => {
        prompt();
        createEngineerCard(answers)
    })
}


const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the intern's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What is the intern's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What is the intern's email?",
        },
        {
            type: "input",
            name: "school",
            message: "What is the intern's school?",
        },
    ]).then((answers) => {
        prompt();
        createInternCard(answers)
    })
}
