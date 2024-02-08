const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(Number);

const restArr = new Set();

for(let i=0; i<input.length; i++){
  const rest = input[i] % 42;
  if(!restArr.has(rest)){
    restArr.add(rest);
  }
}


console.log(restArr.size);
