const fs = require('fs');
const [first, trees] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [n, needHeight] = first.split(" ").map(Number);
const tree = trees.split(" ").map(Number);

let start = 0;
let end = Math.max(...tree);
let result = 0;
let maxDiffHeight = Infinity;

while(start < end) {
  let mid = Math.floor((start + end) / 2);
  let getTreeHeight = 0;

  for(const item of tree){
    if(Number(item) > mid) {
      getTreeHeight += Number(item) - mid;
    }
  }

  if(getTreeHeight === needHeight){
    result = mid;
    break;
  }

  if(getTreeHeight > needHeight) {
    start = mid + 1;
  }else{
    end = mid;
  }
  if(getTreeHeight > needHeight && maxDiffHeight > Math.abs(needHeight - getTreeHeight)){
    maxDiffHeight = Math.abs(needHeight - getTreeHeight);
    result = mid;
  }
}

if(result === 0){
  console.log(end - 1 >= 0 ? end - 1 : 0);
}else{
  console.log(result);
}
