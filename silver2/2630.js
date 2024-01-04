const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const paper = input.map(v => v.split(" ").join(""))

let white = 0;
let blue = 0;

function divide(data) {
  let firstDataSame = true;
  for(let i=1; i<data.length; i++){
    if(data[0].includes('0') && data[0].includes('1')){
      firstDataSame = false;
    }
    if(data[0] !== data[i]){
      firstDataSame = false;
    }
  }
  if(firstDataSame){
    if(data[0].includes('1')){
      blue++;
      return ;
    }
    if(data[0].includes('0')){
      white++;
      return ;
    }
  }

  let dataLength = data.length / 2;

  let topData = data.slice(0, dataLength);
  let bottomData = data.slice(dataLength, data.length);

  let topLeftData = topData.map(v => v.slice(0, dataLength));
  let topRightData = topData.map(v => v.slice(dataLength, data.length));
  let bottomLeftData = bottomData.map(v => v.slice(0, dataLength));
  let bottomRightData = bottomData.map(v => v.slice(dataLength, data.length));

  let topLeftSame = true;
  for(let i=1; i<topLeftData.length; i++){
    if(topLeftData[0].includes('0') && topLeftData[0].includes('1')){
      topLeftSame = false;
    }
    if(topLeftData[0] !== topLeftData[i]){
      topLeftSame = false;
    }
  }
  if(!topLeftSame) {
    divide(topLeftData);
  }else{
    if(topLeftData[0].includes('1')){
      blue++;
    }
    if(topLeftData[0].includes('0')){
      white++;
    }
  }

  let topRightSame = true;
  for(let i=1; i<topRightData.length; i++){
    if(topRightData[0].includes('0') && topRightData[0].includes('1')){
      topRightSame = false;
    }
    if(topRightData[0] !== topRightData[i]){
      topRightSame = false;
    }
  }
  if(!topRightSame) {
    divide(topRightData);
  }else{
    if(topRightData[0].includes('1')){
      blue++;
    }
    if(topRightData[0].includes('0')){
      white++;
    }
  }

  let bottomLeftSame = true;
  for(let i=1; i<bottomLeftData.length; i++){
    if(bottomLeftData[0].includes('0') && bottomLeftData[0].includes('1')){
      bottomLeftSame = false;
    }
    if(bottomLeftData[0] !== bottomLeftData[i]){
      bottomLeftSame = false;
    }
  }
  if(!bottomLeftSame) {
    divide(bottomLeftData);
  }else{
    if(bottomLeftData[0].includes('1')){
      blue++;
    }
    if(bottomLeftData[0].includes('0')){
      white++;
    }
  }

  let bottomRightSame = true;
  for(let i=1; i<bottomRightData.length; i++){
    if(bottomRightData[0].includes('0') && bottomRightData[0].includes('1')){
      bottomRightSame = false;
    }
    if(bottomRightData[0] !== bottomRightData[i]){
      bottomRightSame = false;
    }
  }
  if(!bottomRightSame) {
    divide(bottomRightData);
  }else{
    if(bottomRightData[0].includes('1')){
      blue++;
    }
    if(bottomRightData[0].includes('0')){
      white++;
    }
  }
}

divide(paper);

console.log(white);
console.log(blue);
