const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const word = new Set(input);
let wordArr = Array.from(word);

wordArr.sort().sort((a, b) => a.length-b.length).forEach(v => console.log(v));