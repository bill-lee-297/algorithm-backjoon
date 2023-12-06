const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

let sum = Number(input);
let cnt = 0;
let currentNum = 1;

while(sum > 0) {
  if(sum - currentNum >= 0){
    sum -= currentNum;
    currentNum++;
    cnt++;
  }else{
    break;
  }
}

console.log(cnt)
