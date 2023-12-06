const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let rank = [];

for(let i=0; i<input.length; i++){
  if(!input[i].includes(" ")) {
    let currentIndex = i+1
    let data = input.slice(currentIndex, Number(input[i])+currentIndex)
    data = data.map((v, i) => v.split(" ").map(Number));
    rank.push(data);
  }
}

for(let i=0; i<rank.length; i++) {
  let temp = rank[i].sort((a, b) => a[0] - b[0]);
  let maxNum = temp[0][1]
  let cnt = 1;

  for(let j=1; j<temp.length; j++){
    if(maxNum > temp[j][1]) {
      maxNum = temp[j][1];
      cnt++;
    }
  }
  console.log(cnt);
}