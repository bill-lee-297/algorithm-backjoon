const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const stairs = [];
const points = input.map(Number);

stairs[0] = points[0];
stairs[1] = Math.max(points[0]+points[1], points[1]);
stairs[2] = Math.max(points[0]+points[2], points[1]+points[2]);

function addPointStairs(num) {
  if(num <= stairs.length){
    return stairs[num-1];
  }
  for(let i=stairs.length; i<Number(n); i++){
    stairs[i] = Math.max(points[i] + points[i-1] + stairs[i-3], points[i] + stairs[i-2])
  }

  return stairs[num-1];
}

console.log(addPointStairs(n))