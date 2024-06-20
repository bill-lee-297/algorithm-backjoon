const fs = require('fs');
let [num, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let [n, m] = num.split(" ").map(Number);

let graph = [];
for(let i=1; i<=n; i++) graph[i] = [];
for(let i=0; i<n-1; i++) {
  let [x, y, cost] = input[i].split(" ").map(Number);
  graph[x].push([y, cost]);
  graph[y].push([x, cost]);
}

function dfs(x, dist) {
  if(visited[x]) return;
  visited[x] = true;
  distance[x] = dist;
  for(let [y, cost] of graph[x]) {
    dfs(y, dist + cost);
  }
}

for (let i=0; i<m; i++){
  let [x, y] = input[m+1+i].split(" ").map(Number);
  visited = new Array(n+1).fill(false);
  distance = new Array(n+1).fill(-1);
  dfs(x, 0);
  console.log(distance[y]);
}

