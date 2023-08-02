const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")

function isPrime(number) {
  if(number === 1) {
    return false;
  }
  for(let i=2; i * i <= number; i++){
    if(number % i === 0) {
      return false;
    }
  }

  return true;
}

let primeCount = inputArr.filter(data => isPrime(Number(data)));

console.log(primeCount.length)
