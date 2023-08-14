const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue (newValue) {
    const newNode = new Node(newValue);
    if(this.head === null){
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.size += 1;
  }

  dequeue() {
    if(this.size === 0){
      return '-1';
    }else{
      let popValue = this.head.value;
      this.head = this.head.next;
      this.size -= 1;
      return popValue;
    }
  }

  front () {
    if(this.size === 0){
      return '-1';
    }else{
      return node.head.value
    }
  }

  back () {
    if(this.size === 0){
      return "-1";
    }else{
      return this.tail.value;
    }
  }
}

let node = new Queue();
let result = "";

for(let i=0; i<input.length; i++){
  let command = input[i];
  if(command === 'front'){
    result += node.front() + "\n";
  } else if(command === 'back'){
    let lastNode = node.back();
    result += lastNode + "\n";
  } else if (command === 'pop'){
    let value = node.dequeue();
    result += (value ?? '-1') + "\n";
  } else if (command === 'size'){
    result += String(node.size) + "\n";
  } else if (command === 'empty'){
    result += (node.size ? '0' : '1') + "\n"
  } else {
    let value = command.split(" ")[1];
    node.enqueue(value)
  }
}

console.log(result);