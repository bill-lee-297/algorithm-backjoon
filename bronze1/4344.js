const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.map((v) => {
  let row = v.split(" ").map(Number);
  let sum = 0;
  let totalCount = row[0];

  for(let i=1; i<row.length; i++){
    sum += row[i];
  }

  let avg = sum / totalCount;

  let overCount = 0;

  for(let i=1; i<row.length; i++){
    if(row[i] > avg){
      overCount++;
    }
  }

  console.log((100 / ((totalCount / overCount))). toFixed(3)+"%");
})