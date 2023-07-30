const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(data => {
  let dataArr = Array.from(data);
  let totalPoint = 0;
  let accPoint = 1;

  for(let i=0; i<dataArr.length; i++){
    if(dataArr[i] === 'O'){
      if(i !== 0 && dataArr[i-1] === 'O'){
        accPoint++;
      }
      totalPoint += accPoint;
    } else {
      accPoint = 1;
    }
  }

  console.log(totalPoint)
})