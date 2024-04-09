const inquirer = require('inquirer')
const chalk = require("chalk")

inquirer.prompt([
  {
  name: 'p1',
  message: 'What is your name?'
  },
  {
  name: 'p2',
  message: 'How old are you?'
  },
]).then((answers) => {

  if(!answers.p1 || !answers.p2) {
    throw new Error('Name and age are requested')
  }

  console.log(chalk.bgYellow.black(`Hello ${answers.p1}, ${answers.p2}`));
})
.catch(err => console.log(err))
