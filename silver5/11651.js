const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const arr = input.map(v => {
  let data = v.split(" ").map(Number);
  return [data[0], data[1]]
})

const xSorted = arr.sort((a, b) => a[0] - b[0]);
const ySorted = xSorted.sort((a, b) => a[1] - b[1]);

let result = "";

for(let i=0; i<ySorted.length; i++){
  result += ySorted[i].join(" ") + "\n"
}

console.log(result);