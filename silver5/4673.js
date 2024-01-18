const calc = (number) => {
  let numberString = String(number);

  let numberArr = numberString.split('');
  let sum = numberArr.reduce((acc, curr) => {
    return acc+Number(curr)
  }, 0);

  return number + sum;
}

let standard = new Set();
let result = "";

for(let i=1; i<10000; i++){
  standard.add(calc(i))
}

for(let j=1; j<=10000; j++){
  if(!standard.has(j)){
    result += j + "\n"
  }
}

console.log(result);
