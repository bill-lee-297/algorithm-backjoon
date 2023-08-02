const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

input.forEach(data => {
  let left = 0;
  data = Array.from(data);
  data.forEach(ps => {
    if(left < 0){
      left = -99;
      return false;
    } else {
      if(ps === "("){
        left++;
      } else {
        left--;
      }
    }
  })
  if(left === 0){
    console.log("YES");
  }else{
    console.log("NO")
  }
})