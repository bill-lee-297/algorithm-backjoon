const fs = require('fs');
let input = fs.readFileSync("./dev/stdin").toString().trim();
input = Number(input);

class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }
}

class Queue {
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
    this.size++;
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    this.size--;
    return value;
  }

  peek() {
    return this.head.value;
  }
}

const queue = new Queue();

for(let i=1; i<=input; i++){
  queue.enqueue(i);
}

while (queue.size > 1) {
  queue.dequeue();
  if(queue.size !== 1){
    const backNumber = queue.dequeue();
    queue.enqueue(backNumber);
  }
}

console.log(queue.peek());