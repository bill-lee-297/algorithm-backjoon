const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

const keyword = Array.from(input);
const result = [];

for(let i=97; i<=122; i++){
  result.push(keyword.indexOf(String.fromCharCode(i)))
}

console.log(result.join(" "));