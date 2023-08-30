const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const times = input.split(" ").map(Number);
const timeList = [];

times.sort((a, b) => a - b).reduce((acc, curr) => {
  timeList.push(acc+curr);
  return acc + curr;
}, 0);

const result = timeList.reduce((acc, curr) => {
  return acc + curr;
})

console.log(result);