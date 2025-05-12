"use strict";
function queueObjectFields() {
    const data = new Map();
    let tail = 0, head = 0, size = 0;
    let headPrefix = 0, tailPrefix = 0;
    //const MAX_INDEX = Number.MAX_SAFE_INTEGER;
    const MAX_INDEX = 100_000_000;

    const createIndex = (prefix, value) => `${prefix}:${value}`;

    function checkEmpty() {
        if (getSize() === 0) {
            throw new RangeError("The queue is empty");
        }
    }
    function push(value) {
        if (size >= MAX_INDEX) {
            throw new RangeError("Queue overflow!");
        }
        const key = createIndex(tailPrefix, tail);
        data.set(key, value);
        tail = (tail + 1) % MAX_INDEX;
        if (tail === 0) ++tailPrefix;
        ++size;
    }

    function pop() {
        checkEmpty();
        const index = createIndex(headPrefix, head);
        const output = data.get(index);
        data.delete(index);
        head = (head + 1) % MAX_INDEX;
        if (head === 0) ++headPrefix;
        --size;
        return output;
    }
    function peek() {
        checkEmpty();
        return data.get(createIndex(headPrefix, head));
    }
    function getSize(){
        return size;
    }
    return {pop, getSize, peek, push};
}
const myQueue = queueObjectFields();
try {
    myQueue.pop();
    console.error("Failed: Should throw on empty pop");
} catch (e) {}
myQueue.push(1);
myQueue.push(2);
myQueue.push(3);
console.assert(myQueue.peek() === 1, 'peek === 1'); // 1
console.assert(myQueue.getSize() === 3, 'size === 3');
console.assert(myQueue.pop() === 1, 'pop === 1');  // 1
console.assert(myQueue.getSize() === 2, 'size === 2');
console.assert(myQueue.peek() === 2, 'peek === 2'); // 2
console.assert(myQueue.pop() === 2, 'pop === 2');  // 2
console.assert(myQueue.peek() === 3, 'peek === 3'); // 3
console.assert(myQueue.getSize() === 1, 'size === 1 (second time)'); // 1
console.assert(myQueue.pop() === 3, 'pop === 3');  // 3
try {
    myQueue.peek();
    console.error("Failed: Should throw on empty peek");
} catch (e) {}
