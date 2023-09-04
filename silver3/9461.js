const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const dp = [1,1,1,2,2,3,4,5,7,9]

function findNumber(num){
  const dpLength = dp.length;
  if(dpLength < num){
    for(let i=dpLength; i<num; i++){
      dp.push(dp[i-3] + dp[i-2])
    }
  }
}

let result = "";

for(let i=0; i<n; i++){
  const number = input[i];
  findNumber(number);
  result += dp[number-1] + "\n"
}

console.log(result);