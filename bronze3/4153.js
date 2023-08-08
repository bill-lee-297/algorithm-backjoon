const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for(let i=0; i<input.length-1; i++){
  const numbers = input[i].split(" ").map(Number);
  numbers.sort((a, b) => a-b);
  const [a, b, c] = numbers
  if(a ** 2 + b ** 2 === c ** 2){
    console.log("right");
  }else{
    console.log("wrong")
  }
}