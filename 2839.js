const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

let maxCount_5 = Math.floor(input / 5);

for(let i=maxCount_5; i>0; i--){
  let remain = input - (5 * i);

  if(remain % 3 === 0){
    console.log(Number(i) + Number(remain/3))
    return false;
  }
}

if(input % 3 === 0){
  console.log(Math.floor(input / 3));
} else {
  console.log(-1);
}





