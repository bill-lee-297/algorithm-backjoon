const fs = require('fs');
const [H, M] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

const alarm = H * 60 + M;
let beforeMinute = alarm - 45;
let beforeHour = Math.floor(beforeMinute/60);
beforeMinute = beforeMinute % 60

if(beforeHour < 0) {
  beforeHour = 24 - (beforeHour * -1);
}
if(beforeMinute < 0){
  beforeMinute = 60 - (beforeMinute * -1);
}

console.log(beforeHour + " " + beforeMinute);
