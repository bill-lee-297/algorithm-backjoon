const fs = require('fs');
let [ball, basket] = fs.readFileSync("./dev/stdin").toString().trim().split(" ").map(Number);

let summary = 0;
for(let i=1; i<basket+1; i++){
  summary += i;
}
if(summary > ball){
  console.log(-1);
}else{
  ball -= summary;
  if(ball % basket === 0) {
    console.log(basket-1)
  }else{
    console.log(basket)
  }
}
