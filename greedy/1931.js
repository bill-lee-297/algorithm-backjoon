const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let count = [];
const scheduleArr = [];

for(let i=0; i<input.length; i++){
  const [start, end] = input[i].split(" ").map(Number);
  scheduleArr.push([start, end])
}

scheduleArr.sort((a, b) => a[0] - b[0]);

scheduleArr.sort((a, b) => a[1] - b[1]);

for(let i=0; i<scheduleArr.length; i++){
  if(i === 0){
    count.push(scheduleArr[i]);
  }else{
    if(count[count.length-1][1] <= scheduleArr[i][0]){
      count.push(scheduleArr[i]);
    }
  }
}

console.log(count.length);
