const fs = require('fs');
const [n, m] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

const prime = {1: true};

for(let i=2; i*i <= m; i++){
  if(prime[i]){
    continue;
  }
  for(let j=i*2; j<=m; j+=i){
    prime[j] = true;
  }
}

console.log(prime)

const result = [];

for(let i=n; i<=m; i++){
  if(!prime[i]){
    result.push(i);
  }
}

console.log(result.join("\n"));