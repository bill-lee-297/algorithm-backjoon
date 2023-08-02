const fs = require('fs');
let [a, b] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

a = Number(a);
b = Number(b);

if(a < b) {
  console.log("<")
}

if(a > b) {
  console.log(">")
}

if(a === b) {
  console.log("==")
}