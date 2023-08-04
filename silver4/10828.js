const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");


class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top?.value ?? null;
    this.top = this.top?.next ?? null;
    if(value) {
      this.size -= 1;
    }
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
let result = "";

for(let i=0; i<input.length; i++){
  const command = input[i];

  if(command === 'pop'){
    let popValue = stack.pop();
    if(popValue){
      result += popValue + "\n"
    }else{
      result += -1 + "\n"
    }

  }else if(command === 'size'){
    result += stack.size + "\n"
  }else if(command === 'empty'){
    if(stack.size === 0){
      result += 1 + "\n"
    }else{
      result += 0 + "\n"
    }
  }else if(command === 'top'){
    let topValue = stack.top?.value ?? -1
    result += topValue + "\n"
  }else{
    const [_, value] = command.split(" ");
    stack.push(Number(value));
  }
}

console.log(result);