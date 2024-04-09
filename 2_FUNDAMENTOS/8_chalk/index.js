const chalk = require("chalk")

const score = 6
const targetScore = 7

if(score >= targetScore) {
  console.log(chalk.green('Congrats! You are aproved!'))
} else {
  console.log(chalk.red('Sorry! You are reproved!'))
}
