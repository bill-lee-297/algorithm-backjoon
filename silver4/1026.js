const fs = require('fs');
const [n, a, b] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let aNumbers = a.split(" ").map(Number).sort((a, b) => a-b);
let bNumbers = b.split(" ").map(Number).sort((a, b) => b-a);
let result = 0;

for(let i=0; i<aNumbers.length; i++){
  result += aNumbers[i] * bNumbers[i];
}

console.log(result);