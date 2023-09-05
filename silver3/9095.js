const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const numbers = input.map(Number);

const numberOfCase = [];
numberOfCase[0] = 1;
numberOfCase[1] = 2;
numberOfCase[2] = 4;
numberOfCase[3] = 7;

function solution(n) {
  if(n <= numberOfCase.length){
    return numberOfCase[n-1]
  }
  for(let i=numberOfCase.length; i<=n; i++){
    numberOfCase[i] = numberOfCase[i-1] + numberOfCase[i-2] + numberOfCase[i-3]
  }

  return numberOfCase[n-1];
}
let result = "";

for(let i=0; i<numbers.length; i++){
  solution(numbers[i]);
  result += numberOfCase[numbers[i]-1] + "\n"
}

console.log(result)