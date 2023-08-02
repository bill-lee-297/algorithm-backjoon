const fs = require('fs');
const [n, input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const inputArr = input.trim().split(" ")

const sortArr = inputArr.sort((a, b) => b - a).map(data => Number(data));
const maximumScore = sortArr[0];


let newScoreArr = sortArr.map((score) => score / maximumScore * 100)

let sumScore = newScoreArr.reduce((prev, curr) => prev + curr, 0);
let avgScore = sumScore / n;

console.log(avgScore);