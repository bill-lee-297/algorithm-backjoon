const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

let maxCount_5 = Math.floor(input / 5);

console.log('maxCount_5 :: ', maxCount_5)

for(let i=maxCount_5; i>0; i--){
  let remain = input % (5 * i);

  console.log("input, i :: ", input, i)

  console.log("remain :: ", remain)

  if(remain / 3 === 1){
    console.log((input/i) + "" + (remain/3))
    return false;
  }
}

console.log(-1);


