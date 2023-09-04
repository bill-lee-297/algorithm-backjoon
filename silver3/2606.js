const fs = require('fs');
const [n, m, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const graph = [...Array(Number(n)+1)].map(v => []);


for(let i=0; i<m; i++){
  let [from, to] = input[i].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}

const BFS = (graph, start) => {
  let visited = [];
  let needVisited = [];

  needVisited.push(start);

  while(needVisited.length !== 0){
    let node = needVisited.shift();
    if(!visited.includes(node)){
      visited.push(node);
      needVisited = [...needVisited, ...graph[node]]
    }
  }

  return visited;
}

let count = BFS(graph, 1);
console.log(Number(count.length) - 1);