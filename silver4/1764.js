const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = n.split(" ");

const noListening = new Map();
const noShowing = [];

for(let i=0; i<N; i++){
  noListening.set(input[i], false);
}

for(let i=N; i<input.length; i++){
  noShowing.push(input[i]);
}

for(let i=0; i<noShowing.length; i++){
  if(noListening.has(noShowing[i])){
    noListening.set(noShowing[i], true);
  }
}

const result = [...noListening].filter((v) => v[1] === true).map((v) => v[0]).sort();

console.log(result.length + "\n" + result.join("\n"));