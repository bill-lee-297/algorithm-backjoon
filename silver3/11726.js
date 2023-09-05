const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

const numberOfCases = [1,2,3,5,8];


function findCaseOfNumber(n) {
  if(n > numberOfCases.length){
    for(let i=numberOfCases.length; i<n; i++){
      numberOfCases.push((numberOfCases[i-2]+numberOfCases[i-1]) % 10007);
    }
  }
}

findCaseOfNumber(input);
console.log(numberOfCases[input-1]);