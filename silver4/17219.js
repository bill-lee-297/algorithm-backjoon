const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [siteCount, searchCount] = n.split(" ").map(Number);
const siteList = new Map();
const searchList = [];
let result = "";

for(let i=0; i<siteCount; i++){
  const [site, password] = input[i].split(" ")
  siteList.set(site, password);
}

for(let i=siteCount; i<siteCount+searchCount; i++){
  searchList.push(input[i])
}

searchList.forEach(v => {
  if(siteList.has(v)){
    result += siteList.get(v) + "\n";
  }
})

console.log(result);