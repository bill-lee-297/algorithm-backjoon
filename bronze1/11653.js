const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

let spread = Number(input);
let result = [];

while(spread > 1) {
  for(let i=2; i<=spread; i++){
    if(spread % i === 0){
      result.push(i);
      spread = spread / i;
      break;
    }
  }
}

console.log(result.join("\n"));