const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
let inputArr = input.trim().split(" ").map(Number);

const removeDuplicated = new Set(inputArr);
const removeDuplicatedArray = Array.from(removeDuplicated).sort((b,a) => b - a);
const shortMap = new Map();
removeDuplicatedArray.forEach((v, i) => shortMap.set(v, i))

for(let i=0; i<n; i++){
  inputArr[i] = shortMap.get(inputArr[i]);
}

console.log(inputArr.join(" "));
