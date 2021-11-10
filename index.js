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