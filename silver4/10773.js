const fs = require('fs');
let [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
input = input.map(Number);

const result = [];
input.forEach(v => v !== 0 ? result.push(v) : result.pop());

let sum = result.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
