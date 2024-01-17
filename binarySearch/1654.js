const fs = require('fs');
let [n, ...cables] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [K, N] = n.split(" ").map(Number);

cables = cables.map(Number);
let start = 1;
let end = Math.max(...cables);
let result = 0;

while(start <= end) {
  let count = 0;
  let mid = Math.floor((start + end) / 2);

  for(item of cables){
    if(item >= mid) {
      count += Math.floor(item / mid);
    }
  }

  if(count >= N){
    start = mid + 1;
    if(result < mid) {
      result = mid;
    }
  }else{
    end = mid - 1;
  }
}
console.log(result);
