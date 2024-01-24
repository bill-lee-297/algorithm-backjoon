const fs = require('fs');
let [testCase, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

testCase = Number(testCase);
let testCaseLine = 0;

while(testCase--){
  let floor = Number(input[testCaseLine]);
  let line = Number(input[testCaseLine+1]);
  let apartment = [...new Array(floor+1)].map(() => []);

  for(let i=1; i<=line; i++){
    apartment[0].push(i);
  }

  for(let i=1; i<=floor; i++){
    apartment[i] = [];
    for(let j=0; j<line; j++){
      let amount = 0;
      for(let k=0; k<j+1; k++){
        amount += apartment[i-1][k];
      }
      apartment[i].push(amount);
    }
  }
  testCaseLine = testCaseLine + 2;

  console.log(apartment[floor][line-1]);
}
