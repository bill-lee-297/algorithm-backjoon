const fs = require('fs');
const [...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(x => Number(x));

let result = [[0, 0]];

input.forEach((data, index) => {
  if(result[0][1] < data){
    result[0] = [index+1, data];
  }
})

console.log(Number(result[0][1]))
console.log(Number(result[0][0]))