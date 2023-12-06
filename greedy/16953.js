const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

let maxNum = Number(input[1]);
const minNum = Number(input[0]);
let cnt = 0;

while(maxNum > minNum) {
  if(maxNum % 2 === 0) {
    maxNum = maxNum / 2
  }else if(maxNum % 10 === 1) {
    maxNum = Math.floor(maxNum / 10);
  }else {
    break;
  }
  cnt++;
}

if(maxNum === minNum) {
  if(cnt === 0){
    console.log(cnt);
  }else{
    console.log(cnt+1);
  }
} else {
  console.log(-1)
}
