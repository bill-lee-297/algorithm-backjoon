const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const board = [];
const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];
const [yLimit, xLimit] = n.split(" ").map(Number);

for(let i=0; i<input.length; i++){
  let numbers = [...input[i]];
  numbers = numbers.map(Number);
  board.push(numbers);
}

const visit = [];
for(let i=0; i<yLimit; i++){
  let arr = [];
  for(let j=0; j<xLimit; j++){
    arr.push(0);
  }
  visit.push(arr);
}

const stack = [[0,0]];
visit[0][0] = 1;
let passCount = 0;

while(stack.length > 0){
  let now = stack.shift();

  for(let i=0; i<4; i++){
    let nx = now[0] + dx[i];
    let ny = now[1] + dy[i];

    if(0 <= nx && nx < yLimit && 0 <= ny && ny < xLimit){
      if(board[nx] && board[nx][ny]){
        if(board[nx][ny] === 1){
          if(visit[nx][ny] === 0){
            visit[nx][ny] = visit[now[0]][now[1]]+1;
            stack.push([nx, ny]);
            passCount++;
          }
        }
      }
    }
  }
}

console.log(visit[yLimit-1][xLimit-1])