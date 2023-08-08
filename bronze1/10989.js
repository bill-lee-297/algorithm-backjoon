const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n").map((data, index) => {
  if(index !== 0){
    return Number(data);
  }
}).sort((a,b) => a - b ).forEach(data => {
  if(data){
    console.log(data);
  }
})