const fs = require('fs');
const [n, distance, price] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const distanceArr = distance.trim().split(" ").map(Number);
const priceArr = price.trim().split(" ").map(Number);

let minPrice = priceArr[0];

for(let i=0; i<priceArr.length; i++){
  if(minPrice < priceArr[i]){
    priceArr[i] = minPrice;
  }else{
    minPrice = priceArr[i];
  }
}

let minCost = BigInt(0);

for(let i=0; i<distanceArr.length; i++){
  minCost += BigInt(distanceArr[i]) * BigInt(priceArr[i]);
}

console.log(String(minCost));
