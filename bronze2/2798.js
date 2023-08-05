const fs = require('fs');
const [number, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const maxNum = Number(number.trim().split(" ")[1])
const inputArr = input.trim().split(" ").map(Number);

let maxValue = 0;
let startPoint = 0;

for(let i=startPoint; i<inputArr.length; i++){
  if(i+2 <= input.length-1) {
    for(let j=i+1; j<inputArr.length; j++){
      for(let k=j+1; k<inputArr.length; k++){
        let sumValue = inputArr[i] + inputArr[j] + inputArr[k]
        if(sumValue === maxNum){
          console.log(sumValue);
          return false;
        }
        if(sumValue <= maxNum && sumValue > maxValue){
          maxValue = sumValue;
        }
      }
    }
  }
}

console.log(maxValue);