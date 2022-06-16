//Dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');


//Constructors

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// Require Template
const template = require('./src/template.js')

// Create empty arrays for team and id as place holders
const teamArr = [];
//start application
function initApp() {

    //use prompt to get manager information and create manager
    function addManager() {
        console.log("add the manager profile");
        inquirer.prompt([
            {
                type: 'input',
                name: 'managerName',
                message: 'What is name of manager?',
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'Where is the manager ID?',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is the manager email?',
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is the manager office number?',
            },

        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamArr.push(manager);
            addTeamMember();
        })
    };

    //add team members after create manager
    function addTeamMember() {
        inquirer.prompt([
            {
                type: 'list',
                name: 'memberChoice',
                message: 'Do you want to add other members?',
                choices: ['engineer', 'intern', 'no more']
            }
        ])
            .then(choice => {
                switch (choice.memberChoice) {
                    case 'engineer':
                        addEngineer();
                        break;
                    case 'intern':
                        addIntern();

                        break;
                    case 'no more':

                        generateHTML();
                        break;
                    default:

                        break;
                }
            })

    }

    //use prompt to get engineer information and create engineer
    function addEngineer() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is name of engineer?',
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'Where is the engineer ID?',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is the engineer email?',
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is the engineer github user name?',
            },

        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.github);
            teamArr.push(engineer);
            addTeamMember();
        })

    }

    //use prompt to get intern information and create intern
    function addIntern() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'inernName',
                message: 'What is name of intern?',
            },
            {
                type: 'input',
                name: 'internId',
                message: 'Where is the intern ID?',
            },
            {
                type: 'input',
                name: 'internEmail',
                message: 'What is the intern email?',
            },
            {
                type: 'input',
                name: 'school',
                message: 'What is the intern school?',
            },

        ])


            .then(answers => {
                const intern = new Intern(answers.inernName, answers.internId, answers.internEmail, answers.school);
                teamArr.push(intern);
                addTeamMember();
            })

    }
    //generate HTML with data
    function generateHTML() {
        console.log("Generating Team Profile.... ");
        console.log(teamArr);
        fs.writeFileSync(path.join(path.resolve(__dirname, 'dist'), 'index.html'), template(teamArr));
    }
    addManager();

}


initApp();


