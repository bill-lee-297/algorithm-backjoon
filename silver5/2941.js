const fs = require('fs');
let [words] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

const dictionary = [
  'c=',
  'c-',
  'dz=',
  'd-',
  'lj',
  'nj',
  's=',
  'z='
]

let count = 0;

while(words.length > 0) {
  let alphabet = words[0] + words[1];

  if (dictionary.includes(alphabet)) {
    words = words.slice(2, words.length);
  } else {
    if (words.length > 2) {
      alphabet = words[0] + words[1] + words[2];
      if (dictionary.includes(alphabet)) {
        words = words.slice(3, words.length);
      }else{
        words = words.slice(1, words.length);
      }
    }else{
      words = words.slice(1, words.length);
    }
  }
  count++;
}

console.log(count);

