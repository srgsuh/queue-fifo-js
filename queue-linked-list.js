"use strict";
function linkedListQueue() {
    function Node(value = null, nextRef = null) {
        this.value = value;
        this.next = nextRef;
    }
    let head = new Node(), tail = head;
    let size = 0;

    function checkEmpty() {
        if (size === 0) {
            throw new RangeError("Queue is empty!");
        }
    }

    function push(value) {
        tail.next = new Node(value);
        tail = tail.next;
        size++;
    }

    function pop() {
        checkEmpty();
        const node = head.next;
        head.next = node.next;
        tail = (node === tail)? head: tail;
        --size;
        node.next = null; // Break the reference
        return node.value;
    }

    function peek() {
        checkEmpty();
        return head.next.value;
    }

    function getSize(){
        return size;
    }

    function log() {
        let current = head.next;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(`Queue[${size}]: ${values.join(' → ')}`);
    }

    return {pop, getSize, peek, push, log}
}

const myQueue = linkedListQueue();

myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
myQueue.log();
console.log(myQueue.peek()); // 1
console.log(myQueue.pop());  // 1
console.log(myQueue.peek()); // 2
console.log(myQueue.pop());  // 2
console.log(myQueue.peek()); // 3
console.log(myQueue.getSize()); // 1
