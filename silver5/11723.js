const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const emptySet = new Set();
let result = "";

for(let i=0; i<input.length; i++){
  let [command, number] = input[i].split(" ")
  number = Number(number);

  switch (command) {
    case 'add':
      if(emptySet.has(number)){
        break;
      }else{
        emptySet.add(number);
        break;
      }
    case 'remove':
      if(emptySet.has(number)){
        emptySet.delete(number);
      }
      break;
    case 'check':
      if(emptySet.has(number)){
        result += 1 + "\n";
      }else{
        result += 0 + "\n";
      }
      break;
    case 'toggle':
      if(emptySet.has(number)){
        emptySet.delete(number);
      }else{
        emptySet.add(number);
      }
      break;
    case 'all':
      for(let i=1; i<=20; i++){
        emptySet.add(i);
      }
      break;
    case 'empty':
      emptySet.clear();
      break;
  }
}

console.log(result);