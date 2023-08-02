const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

let interval = 6;
let i = 1;
let count = 0;

while(i < input){
  i += interval;
  interval += 6;
  count++;
}

console.log(count+1);