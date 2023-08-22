const fs = require('fs');
let [n, cards, m, ownCards] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let cardsArr = cards.split(" ").map(Number);
let ownCardsArr = ownCards.split(" ").map(Number);
let cardsMap = new Map();

for(let i=0; i<cardsArr.length; i++){
  let idx = cardsArr[i]
  if(cardsMap.has(idx)){
    let tempCount = cardsMap.get(cardsArr[i]);
    tempCount += 1;
    cardsMap.set(idx, tempCount)
  } else {
    cardsMap.set(idx, 1)
  }
}

let result = "";

for(let i=0; i<ownCardsArr.length; i++){
  let count = cardsMap.get(ownCardsArr[i]) ?? 0
  result += count + " "
}

console.log(result);