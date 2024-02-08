const fs = require('fs');
const [a, b] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

let reverseA = a[2] + a[1] + a[0];
let reverseB = b[2] + b[1] + b[0];

if(Number(reverseA) > Number(reverseB)){
  console.log(reverseA)
}else{
  console.log(reverseB);
}
