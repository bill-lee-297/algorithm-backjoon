const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, A, M, B] = input.map(v => v.split(" "))

const arrSet = new Set(A);

const result = B.map(v => arrSet.has(v) ? 1 : 0);

console.log(result.join("\n"));