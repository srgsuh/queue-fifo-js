"use strict";
function queueObjectFields() {
    const data = {};
    let tail = Number.MIN_SAFE_INTEGER, head = Number.MIN_SAFE_INTEGER;
    function checkSize() {
        if (getSize() === 0) {
            throw new RangeError("The queue is empty");
        }
    }
    function push(value) {
        data[tail++] = value;
    }
    function pop() {
        const result = peek();
        delete data[head++];
        return result;
    }
    function peek() {
        checkSize();
        return data[head];
    }
    function getSize(){
        return tail - head;
    }
    return {pop, getSize, peek, push};
}
const myQueue = queueObjectFields();
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.assert(myQueue.peek() === 1); // 1
console.assert(myQueue.getSize() === 3);
console.assert(myQueue.pop() === 1);  // 1
console.assert(myQueue.getSize() === 2);
console.assert(myQueue.peek() === 2); // 2
console.assert(myQueue.pop() === 2);  // 2
console.assert(myQueue.peek() === 3); // 3
console.assert(myQueue.getSize() === 1); // 1
console.assert(myQueue.pop() === 3);  // 3
