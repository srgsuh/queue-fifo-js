"use strict";
function linkedListQueue() {
    function Node(value = 0, nextRef = null) {
        this.value = value;
        this.next = nextRef;
    }
    let head = new Node(Infinity), tail = new Node(-Infinity);
    [head.next, tail.next] = [tail, head];
    let size = 0;

    function checkSize() {
        if (size === 0) {
            throw new RangeError("Queue is empty!");
        }
    }

    function push(value) {
        const node = new Node(value);
        tail.next.next = node;
        tail.next = node;
        size++;
    }

    function pop() {
        checkSize();

        let out = head.next.value;
        head.next = head.next.next
        --size;
        return out;
    }

    function peek() {
        checkSize();
        return head.next.value;
    }

    function getSize(){
        return size;
    }
    function log() {
        console.log(head);
        console.log(tail);
    }

    return {pop, getSize, peek, push, log}
}

const myQueue = linkedListQueue();

myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.log(myQueue.peek()); // 1
console.log(myQueue.pop());  // 1
console.log(myQueue.peek()); // 2
console.log(myQueue.pop());  // 2
console.log(myQueue.peek()); // 3
console.log(myQueue.getSize()); // 1
