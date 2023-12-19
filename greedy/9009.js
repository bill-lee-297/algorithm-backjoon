const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let list = [0, 1, 1, 2];
let data = input.map(Number);
let maxNum = Math.max(...data);

function fibonacci(n) {
  if(list.length <= n){
    for(let i=list.length; i<= n; i++){
      let nextValue = list[i-2]+list[i-1]
      if(nextValue > maxNum){
        break;
      }else{
        list.push(list[i-2] + list[i-1]);
      }
    }
  }
}

fibonacci(maxNum);

list.reverse();
let result = "";

for(let i=0; i<n; i++){
  let rowResult = [];
  for(let j=0; j<list.length; j++){
    if(list[j] === 0) {
      break;
    }
    if(list[j] <= data[i]){
      rowResult.push(Number(list[j]));
      data[i] = data[i] - list[j];
    }
  }
  rowResult.sort((a, b) => a - b);
  result += rowResult.join(" ") + "\n"
}

console.log(result)

