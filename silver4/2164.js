const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if(this.head === null) {
      this.head = this.tail = newNode;
    }else{
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

