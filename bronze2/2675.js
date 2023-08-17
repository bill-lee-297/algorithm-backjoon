const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let result = "";

for(let i=0; i<Number(n); i++){
  const [count, chars] = input[i].split(" ")

  for(let j=0; j<chars.length; j++){
    for(let k=0; k<count; k++){
      result += chars[j];
    }
  }
  result += "\n"
}

console.log(result);