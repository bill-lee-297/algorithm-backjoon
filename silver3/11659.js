const fs = require('fs');
const [n, m, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const numbers = m.split(" ").map(Number);
const sumNumbersArr = [];
numbers.reduce((acc, curr) => {
  sumNumbersArr.push(acc+curr);
  return acc = acc + curr;
}, 0)

let result = "";

for(let i=0; i<input.length; i++){
  let [startNum, finalNum] = input[i].split(" ").map(Number);
  if(startNum-2 < 0){
    result += sumNumbersArr[finalNum-1] + "\n";
  }else{
    result += sumNumbersArr[finalNum-1]-sumNumbersArr[startNum-2] + "\n";
  }
}

console.log(result);