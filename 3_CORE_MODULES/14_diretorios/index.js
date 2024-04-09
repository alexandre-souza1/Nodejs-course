// com o modulo fs tambem podemos trabalhar com diretorios(pastas)
// o metodo exists pode evidenciar se um diretorio existe ou nao
// e o metodo mkdir pode criar um diretorio
const fs = require('fs')
// adicionado o comando readline para pegar informacao do usuario
const readline = require('readline');

// cria a interface para entrada
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// verifica se a pasta existe
if(!fs.existsSync('./myfolder')) {
  console.log('doesnt exist!');

  // pergunta ao usuario
  r1.question('Do you want to create myfolder? (Y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      fs.mkdirSync('myfolder')
      console.log('myfolder created!');
    } else {
      console.log("myfolder not created");
    }
    r1.close();
  });
} else {
  console.log('the folder already exists');
  r1.question('Do you want to delete it? (Y/N): ', (answer) => {
    if (answer.toLowerCase() === 'y') {
      fs.rmSync('myfolder', { recursive: true })
        console.log('folder removed!');
      } else {
        console.log('folde not removed.');
      }
      r1.close();
    });
  }
