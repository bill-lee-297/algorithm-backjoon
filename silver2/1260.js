const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const [N, M, S] = n.split(" ").map(Number);
const graph = [...Array(Number(N)+1)].map(e => []);

input.forEach(v => {
  let [from, to] = v.split(" ").map(Number);
  graph[from].push(to)
  graph[to].push(from)
})

graph.forEach(element => {
  element.sort((a, b) => a - b);
});

console.log(graph);

const BFS = (graph, start) => {
  let visited = [];
  let needVisited = [];

  needVisited.push(start);

  while(needVisited.length !== 0){
    let node = needVisited.shift();
    if(!visited.includes(node)){
      visited.push(node);
      needVisited = [...needVisited, ...graph[node]];
    }
  }

  return visited;
}

const DFS = (graph, start) => {
  let visited = [];
  let needVisited = [];

  needVisited.push(start);

  while(needVisited.length !== 0){
    let node = needVisited.shift();
    if(!visited.includes(node)){
      visited.push(node);
      needVisited = [...graph[node], ...needVisited];
    }
  }

  return visited;
}

console.log(DFS(graph, S).join(" "))
console.log(BFS(graph, S).join(" "))
