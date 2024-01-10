const fs = require('fs');
const [N, prices, totalAmount] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let priceArr = prices.split(" ");
let start = 1;
let end = Math.max(...priceArr);
let result = 0;

while(start <= end) {
  let total = 0;
  let mid = Math.floor((start + end) / 2);

  for(const price of priceArr) {
    total += Math.min(Number(price), mid);
  }

  if(total <= Number(totalAmount)){
    result = mid;
    start = mid + 1;
  }else{
    end = mid - 1;
  }
}

console.log(result);

