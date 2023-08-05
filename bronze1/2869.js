const fs = require('fs');
const [up, down, height] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

console.log(Math.ceil((height - up) / (up - down)) + 1);