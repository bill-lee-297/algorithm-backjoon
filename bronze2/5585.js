const fs = require('fs');
let payMoney = fs.readFileSync("./dev/stdin").toString().trim();
payMoney = Number(payMoney);
let coins = [500, 100, 50, 10, 5, 1];
let changeMoney = 1000-payMoney;
let change = 0;

for(let i=0; i<coins.length; i++){
  if(coins[i] <= changeMoney){
    let coinCount = Math.floor(changeMoney/coins[i])
    change += coinCount;
    changeMoney -= coinCount * coins[i];
  }
}

console.log(change);
