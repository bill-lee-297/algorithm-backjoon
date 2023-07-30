const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(x => Number(x));

inputArr.sort((a, b) => a - b);
console.log(inputArr[0], inputArr[inputArr.length-1])
