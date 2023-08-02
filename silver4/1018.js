const fs = require('fs');
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ")
let maxN = 0;
let maxM = 0;

if(N > 8) maxN = N-8;
if(M > 8) maxM = M-8;

