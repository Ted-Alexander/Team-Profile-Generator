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

//prompts teh users for information
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
//gernerates the cards
const createManagerCard = (answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
    managerCard = `
    <div class="card col text-center" style="width: 18rem; margin: 10px;">
      <div class="card-header bg-warning">

        <h2 class="card-title">${manager.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${manager.name}</h6>

        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>

        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + managerCard;
}

const createEngineerCard = (answers) => {
    const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
    engineerCard = `
    <div class="card col text-center" style="width: 18rem; margin: 10px;">
      <div class="card-header bg-info">

        <h2 class="card-title">${engineer.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${engineer.name}</h6>
        <div style="width: 100%;">

      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>

        <li class="list-group-item">Github Username: ${engineer.github}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + engineerCard;
}

const createInternCard = (answers) => {
    const intern = new Intern(answers.name, answers.id, answers.email, answers.school)
    internCard = `

    <div class="card col text-center" style="width: 18rem; margin: 10px;">
      <div class="card-header bg-light">
        <h2 class="card-title">${intern.getRole()}</h5>
        <h3 class="card-subtitle mb-2">${intern.name}</h6>

        <div style="width: 100%;">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>

        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
        <li class="list-group-item">School: ${intern.school}</li>
      </ul>
    </div>
      </div>
    </div>
        ` + internCard;
}
//
const renderHTML = () =>
    `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8"> 

  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./style.css">
  <title>Team Profile</title>
</head>

<body>

  <div class="jumbotron jumbotron-fluid">
    <div class="container">

        <h1 class="text-center">Your Team:</h1>
    </div>


  </div>
  <div class="container">
    <div class="row row-cols-auto d-flex justify-content-center">     
        ${managerCard}
    </div>

    <div class="row row-cols-auto d-flex justify-content-center"> 
        ${engineerCard}
    </div>

    <div class="row row-cols-auto d-flex justify-content-center">
        ${internCard}
    </div>

</body>

</html>`;

prompt()