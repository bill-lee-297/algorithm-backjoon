const fs = require('fs');
const [n, ...input] = fs.readFileSync("./dev/stdin").toString().trim().split("\n");



class Node {
  constructor(value) {
    this.prev = null;
    this.next = null;
    this.value = value;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  pushFront(value) {
    const newNode = new Node(value);
    if(this.getSize() === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  pushBack(value) {
    const newNode = new Node(value);
    if(this.getSize() === 0){
      this.head = newNode;
      this.tail = newNode;
    }else{
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.size++;
  }

  popFront() {
    if(this.getSize() === 0){
      return -1;
    }else if(this.getSize() === 1){
      const value = this.head.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }else if(this.getSize() === 2) {
      const value = this.head.value;
      this.head = this.head.next;
      this.tail.prev = null;
      this.size--;
      return value;
    }else if(this.getSize() > 2) {
      const value = this.head.value;
      this.head.next.prev = null;
      this.head = this.head.next;
      this.size--;
      return value;
    }
  }

  popBack() {
    if(this.getSize() === 0){
      return -1;
    }else if(this.getSize() === 1){
      const value = this.tail.value;
      this.head = null;
      this.tail = null;
      this.size--;
      return value;
    }else if(this.getSize() === 2){
      const value = this.tail.value;
      this.tail = this.tail.prev;
      this.head.next = null;
      this.size--;
      return value;
    }else if(this.getSize() > 2){
      const value = this.tail.value;
      this.tail.prev.next = null;
      this.tail = this.tail.prev;
      this.size--;
      return value;
    }
  }

  getSize() {
    return this.size;
  }

  getFront() {
    return this.getSize() ? this.head.value : -1;
  }

  getBack() {
    return this.getSize() ? this.tail.value : -1;
  }

  isEmpty() {
    return this.getSize() ? 0 : 1;
  }
}

let result = "";
const deque = new Deque();

for(let i=0; i<input.length; i++){
  let commandArr = input[i].split(" ");
  let command = commandArr[0]

  if(command === 'push_back'){
    deque.pushBack(commandArr[1])
  }else if(command === 'push_front'){
    deque.pushFront(commandArr[1])
  }else if(command === 'front'){
    result += deque.getFront() + "\n";
  }else if(command === 'back'){
    result += deque.getBack() + "\n";
  }else if(command === 'size'){
    result += deque.getSize() + "\n"
  }else if(command === 'empty'){
    result += deque.isEmpty() + "\n"
  }else if(command === 'pop_front'){
    result += deque.popFront() + "\n"
  }else if(command === 'pop_back'){
    result += deque.popBack() + "\n"
  }
}

console.log(result);