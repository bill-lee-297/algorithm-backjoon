const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

const wordArr = input.split(" ").map(data => data.trim()).filter(data => data !== '');

console.log(wordArr.length)