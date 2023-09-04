const fs = require('fs');
let [n, ...numbers] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let zeroCountList = [1, 0, 1, 1];
let oneCountList = [0, 1, 1, 2];
let zeroCount = 0;
let oneCount = 0;

function fibonacci(n) {
  if(zeroCountList.length <= n){
    for(let i=zeroCountList.length; i<= n; i++){
      zeroCountList.push(zeroCountList[i-2] + zeroCountList[i-1]);
      oneCountList.push(oneCountList[i-2] + oneCountList[i-1]);
    }
  }
  zeroCount = zeroCountList[n];
  oneCount = oneCountList[n];
}
let result = "";

for(let i=0; i<n; i++){
  fibonacci(numbers[i]);
  result += zeroCount + " " + oneCount + "\n";
  zeroCount = oneCount = 0;
}

console.log(result);