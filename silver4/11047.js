const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [coinCount, price] = n.split(" ").map(Number);
const coins = input.map(Number);

let remainPrice = price;
let countCalc = 0;

for(let i=coins.length; i>=0; i--){
  if(coins[i] <= remainPrice){
    let dividedCoins = Math.floor(remainPrice / coins[i]);
    remainPrice = remainPrice - dividedCoins * coins[i];
    countCalc = countCalc + dividedCoins;
  }
}

console.log(countCalc);