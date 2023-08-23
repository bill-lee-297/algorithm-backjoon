const fs = require('fs');
const [n, ...points] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const resultArr = [];

for(let i=0; i<points.length; i++){
  let point = points[i].split(" ").map(Number);
  resultArr.push(point);
}

let sortedResult = resultArr.sort((a, b) => a[1] - b[1]);

sortedResult.sort((a, b) => a[0] - b[0])

let result = "";
for(let i=0; i<sortedResult.length; i++){
  let pointStr = sortedResult[i].join(" ");
  result += pointStr + "\n"
}

console.log(result);