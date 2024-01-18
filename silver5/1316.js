const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let result = [];

for(const item of input){
  let visited = new Map();
  let groupWord = true;
  for(let i=0; i<item.length; i++){
    const char = item[i];
    const nextChar = item[i+1];

    if(!visited.has(char)){
      visited.set(char, false);
    } else if(visited.get(char) === true){
      groupWord = false;
      break;
    }
    if(char !== nextChar){
      visited.set(char, true);
    }
  }
  if(groupWord){
    result.push(item);
  }
}
console.log(result.length);
