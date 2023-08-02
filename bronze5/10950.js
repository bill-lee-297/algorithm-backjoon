const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(data => {
  let [a, b] = data.trim().split(" ");
  console.log(Number(a) + Number(b));
})