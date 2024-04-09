const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
})

readline.question("What is your favorite language? ", (language) => {
  if(language.toLowerCase() === "java") {
    console.log("Ugh!");
    readline.close()
  } else {
  console.log(`nice, ${language} is great!`);
  readline.close()
  }
})
