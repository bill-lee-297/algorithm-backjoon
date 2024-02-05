const fs = require('fs');
let [num, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
num = Number(num);

const graph = [];
let totalCount = 0;
let groupCountArr = [];

for(let i=0; i<num; i++){
  graph[i] = new Array(num);
  groupCountArr[i] = new Array(num);
}

for(let i=0; i<num; i++){
  const row = input[i];
  for(let j=0; j<row.length; j++){
    graph[i][j] = Number(input[i][j]);
    groupCountArr[i][j] = Number(0);
  }
}

const DFS = (groupNumX, groupNumY, x, y) => {
  if(x <= -1 || x >= num || y >= num || y <= -1){
    return false;
  }

  if(graph[x][y] === 1){
    graph[x][y] = -1;
    let groupCount = groupCountArr[groupNumX][groupNumY];
    groupCountArr[groupNumX][groupNumY] = groupCount+1;

    DFS(groupNumX, groupNumY, x+1, y);
    DFS(groupNumX, groupNumY, x, y+1);
    DFS(groupNumX, groupNumY, x-1, y);
    DFS(groupNumX, groupNumY, x, y-1);
    return true;
  }

  return false;
}

for(let i=0; i<num; i++){
  for(let j=0; j<num; j++){
    if(DFS(i, j, i, j)) {
      totalCount++;
    }
  }
}

let resultArr = [];

for(let i=0; i<groupCountArr.length; i++){
  for(let j=0; j<groupCountArr[i].length; j++){
    if(groupCountArr[i][j] !== 0){
      resultArr.push(groupCountArr[i][j]);
    }
  }
}

console.log(String(totalCount));
console.log(resultArr.sort((a, b) => a-b).join("\n"));
