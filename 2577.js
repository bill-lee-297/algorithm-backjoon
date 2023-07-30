const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map(x => Number(x));

const result = new Map();
const multipleNum = input.reduce((prev, curr) => prev * curr, 1);
const numberArr = Array.from(String(multipleNum));

numberArr.forEach(data => {
  if(result.has(data)){
    let count = result.get(data);
    result.set(data, count+1);
  }else{
    result.set(data, 1);
  }
})

console.log(String(result.get('0') || 0));

for(let i=1; i<=9; i++){
  console.log(String(result.get(String(i)) || 0))
}