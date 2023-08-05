const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);


console.log(input.sort((a, b) => a-b).join("\n"));