const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [N, M] = n.split(" ").map(Number);
const dic = Array.from(Array(N+1), () => new Array());

for(let i=0; i<input.length; i++){
  let [from, to] = input[i].split(" ").map(Number);
  dic[from].push(to);
  dic[to].push(from);
}
console.log(dic)

let lineCount = 0;
const visited = [];
let stack = [];

for(let i=1; i<=dic.size; i++){
  if(!visited.includes(i)){
    stack.push(...dic.get(i))
    visited.push(i);
    lineCount++;
    while(stack.length > 0){
      let node = stack.shift();
      if(!visited.includes(node)){
        visited.push(node);
        const set = new Set([...dic.get(node), ...stack]);
        stack = [...set];
      }
    }
  }
}

console.log(lineCount);