const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

for(let j=0; j<input.length-1; j++){
  const row = input[j];
  let bracket = [];
  let result = true;

  for(let i=0; i<row.length; i++){
    if(row[i] === '(' || row[i] === '[') {
      bracket.push(row[i]);
    }
    if(row[i] === ')') {
      if(bracket[bracket.length-1] === '(') {
        bracket.pop();
      }else{
        result = false;
      }
    }
    if(row[i] === ']') {
      if(bracket[bracket.length-1] === '[') {
        bracket.pop();
      }else{
        result = false;
      }
    }
  }

  if(bracket.length > 0){
    result = false;
  }

  if(result){
    console.log('yes');
  }else{
    console.log('no')
  }
}
