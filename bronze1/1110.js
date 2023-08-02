const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();
let count = 0;
let now = input;

if(now < 10){
  now = '0' + now
}

newCount(now);

function newCount(now) {
  count++;
  let sum = String(Number(now[0]) + Number(now[1]))

  let lastSum = sum.charAt(sum.length - 1);
  now = now[1] + "" + lastSum;

  if(Number(now) === Number(input)) {
    console.log(count);
    return true;
  } else {
    newCount(now)
  }
}