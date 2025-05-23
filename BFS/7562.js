const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

dx = [-2, -2, -1, -1, 1, 1, 2, 2];
dy = [-1, 1, -2, 2, -2, 2, -1, 1];

class Queue {
  constructor() {
    this.items = {};
    this.headIndex = 0;
    this.tailIndex = 0;
  }
  enqueue(item) {
    this.items[this.tailIndex] = item;
    this.tailIndex++;
  }
  dequeue() {
    const item = this.items[this.headIndex];
    delete this.items[this.headIndex];
    this.headIndex++;
    return item;
  }
  peek() {
    return this.items[this.headIndex];
  }
  getLength() {
    return Number(this.tailIndex) - Number(this.headIndex);
  }
}

let testCase = Number(input[0]);
let line = 1;

while(testCase--){
  let lengthNumber = Number(input[line]); // 체스판 크기
  let [x, y] = input[line+1].split(' ').map(Number); // 현재 위치
  let [targetX, targetY] = input[line+2].split(' ').map(Number); // 목표 위치

  let visited = [];
  for(let i=0; i<lengthNumber; i++){
    visited.push(new Array(lengthNumber).fill(0));
  }

  let queue = new Queue();
  queue.enqueue([x, y]);
  visited[x][y] = 1;

  while(queue.getLength() !== 0){
    let cur = queue.dequeue();
    x = cur[0];
    y = cur[1];

    for(let i=0; i<dx.length; i++){
      let nx = x + dx[i];
      let ny = y + dy[i];
      if(nx < 0 || nx >= lengthNumber || ny < 0 || ny >= lengthNumber) continue;
      if(visited[nx][ny] === 0) {
        visited[nx][ny] = visited[x][y] + 1;
        queue.enqueue([nx, ny]);
      }
    }
  }

  line += 3;
  console.log(visited[targetX][targetY] - 1);
}