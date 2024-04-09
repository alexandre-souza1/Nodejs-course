// mais de um valor
const x = 10
const y = 'string'
const z = [1, 2]

console.log(x, y, z);

// contagem de impressoes
let count = 0
while (count < x) {
  console.count(`the x value is: ${x}, count`);
  count++;
}

// variavel de string
console.log("the name is %s, he is dev", y);

// limpar o console
setTimeout(() => {
  console.clear()
}, 2000)
