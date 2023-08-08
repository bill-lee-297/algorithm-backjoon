const fs = require('fs');
const [a, b] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

const factorial = (num) => {
  return num-1 > 0 ? num * factorial(num - 1) : 1;
}

console.log(factorial(a) / (factorial(a - b) * factorial(b)));