const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [totalCount, printCount] = n.split(" ").map(Number);
const dics = new Map();
let dicsArr = [];
for(let i=0; i<totalCount; i++){
  dics.set(input[i], i+1)
  dicsArr.push(input[i])
}

let result = "";

for(let i=totalCount; i<totalCount+printCount; i++){
  let command = input[i];
  if(isNaN(Number(command))) {
    result += dics.get(command) + "\n";
  }else{
    result += dicsArr[Number(command)-1] + "\n";
  }
}

console.log(result);