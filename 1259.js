const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for(let i=0; i<input.length-1; i++){
  let numArr = Array.from(input[i]);
  let reverseNum = numArr.reverse().join("");
  if(input[i] === reverseNum){
    console.log("yes")
  }else {
    console.log("no")
  }
}