const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();
let resultFlag = false;

for(let i=input; i>0; i--){
  let arrNumber = Array.from(String(i));
  if(!arrNumber.includes("0")){
    let arrSum = arrNumber.reduce((prev, curr) => Number(prev) + Number(curr), 0);
    if(Number(i+arrSum) === Number(input)){
      resultFlag = true;
      console.log(Number(i))
    }
  }
}

if(!resultFlag){
  console.log(0)
}