const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();
const inputArr = input.split('-').map(v => v.split("+").reduce((acc, curr) => acc += Number(curr), 0));

let result = inputArr.reduce((acc, curr, currentIndex) => {
  if(currentIndex === 0){
    return curr;
  }
  return acc - curr;
}, 0)

console.log(result);