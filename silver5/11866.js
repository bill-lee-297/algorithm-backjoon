const fs = require('fs');
let [N, K] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

N = Number(N);
K = Number(K);

const circle = [];

for(let i=1; i<=N; i++){
  circle.push(true);
}

let count = N;
let positionIdx = 0;
let result = "";

while(count > 0) {
  let moveCount = 0;

  while(moveCount < K){
    if(circle[positionIdx] === true){
      moveCount++;
    }
    if(moveCount < K){
      positionIdx++;
    }
    if(positionIdx >= N){
      positionIdx = positionIdx - N;
    }
  }

  circle[positionIdx] = false;
  count--;
  if(positionIdx > N) {
    positionIdx = 0;
  }
  result += positionIdx+1 + ", "
}

result = result.slice(0, result.length -2);

console.log("<"+result+">");