const inquirer = require('inquirer')

inquirer.prompt([
  {
  name: 'p1',
  message: 'What is the first note?'
  },
  {
  name: 'p2',
  message: 'What is the secont note?'
  },
]).then((answers) => {
  console.log(answers);
  const media = ((parseInt(answers.p1) + parseInt(answers.p2)) / 2)

  console.log(`the media is ${media}`);
})
.catch(err => console.log(err))
