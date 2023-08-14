const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

let members = new Map();

for(let i=0; i<input.length; i++){
  let [age, name] = input[i].split(" ");
  age = Number(age);

  if(members.has(age)){
    let memberName = members.get(age);
    memberName += " " + name;
    members.set(age, memberName)
  }else{
    members.set(age, name)
  }
}

let memberArr = Array.from(members).sort((a, b) => {
  return a[0]-b[0]
});

let result = "";

for(let i=0; i<memberArr.length; i++){
  let membersName = memberArr[i][1];
  let membersNameArr = membersName.split(" ");

  for(let j=0; j<membersNameArr.length; j++){
    result += memberArr[i][0] + " " + membersNameArr[j] + "\n";
  }
}

console.log(result)