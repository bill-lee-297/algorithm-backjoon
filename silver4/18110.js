const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

if(n < 1){
  console.log(0);
  return ;
}

const points = input.map(Number);
points.sort((a, b) => a - b);

const limit = Math.round(Number(n) * 0.15);

let validPoints = points.slice(limit, points.length);
validPoints = validPoints.slice(0, validPoints.length-limit);

const avg = validPoints.reduce((acc, curr) => acc +curr, 0) / validPoints.length;
const level = Math.round(avg) > 30 ? 30 : Math.round(avg) < 1 ? 1 : Math.round(avg)
console.log(level);
