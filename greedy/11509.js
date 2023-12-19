const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ").map(Number)

let count = 0;

for(let i=0; i<inputArr.length; i++){
  let height;
  if(inputArr[i] === -1){
    continue;
  }else{
    height = inputArr[i];
    count++;
  }

  for(let j=i+1; j<inputArr.length; j++){
    if(height - 1 === inputArr[j]) {
      inputArr[j] = -1;
      height--;
    }
    if(height-1 === 0) {
      break;
    }
  }
}

console.log(count)
