const fs = require('fs');
const [a, b] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

function gcb(a, b){
  return a % b === 0 ? b : gcb(b, a % b);
}

function lcm(a, b){
  return a * b / gcb(a, b);
}

console.log(gcb(a, b))
console.log(lcm(a, b))