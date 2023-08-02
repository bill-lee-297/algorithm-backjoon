const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim();

const charArr = Array.from(input);

if(charArr.length < 2){
  console.log(input.toUpperCase())
  return ;
}

const scoreMap = new Map();

charArr.forEach(char => {
  const upperChar = char.toUpperCase();
  if(scoreMap.has(upperChar)){
    let count = scoreMap.get(upperChar)+1;
    scoreMap.set(upperChar, count);
  } else {
    scoreMap.set(upperChar, 1);
  }
})

const scoreArr = Array.from(scoreMap).sort((a,b) => b[1] - a[1])

if(scoreArr[0][1] === scoreArr[1][1]){
  console.log("?")
}else {
  console.log(scoreArr[0][0])
}


