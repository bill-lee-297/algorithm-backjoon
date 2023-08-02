const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.shift();
const files = input.sort((a, b) => b.length - a.length);
let result = Array.from(files[0]);

for(let i = 1; i < files.length; i++){
  let compareKeyword = Array.from(files[i]);
  for(let j=0; j<result.length; j++){
    if(result[j] !== compareKeyword[j]){
      result[j] = "?"
    }
  }
}

result = result.join('')
console.log(result)