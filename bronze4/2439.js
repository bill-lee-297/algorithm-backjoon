const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

for(let i=1; i<=input; i++){
  let star = "";
  for(let j=0; j<i; j++){
    star += "*"
  }

  let spaceCount = input - star.length;
  let result = "";
  for(let k=0; k<spaceCount; k++){
    result += " ";
  }
  console.log(result + star);
}