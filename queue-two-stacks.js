"use strict";
function queueTwoStacks() {
    const popData = [], pushData=[];
    let size = 0;
    function transfer() {
        while (pushData.length > 0) {
            popData.push(pushData.pop());
        }
    }

    function checkEmpty() {
        if (size === 0) {
            throw new RangeError("Queue is empty!");
        }
    }

    function push(value) {
        pushData.push(value);
        size++;
    }

    function pop() {
        checkEmpty();
        if (popData.length === 0) {
            transfer();
            pushData.length = 0;  // Clear references
        }
        size--;
        return popData.pop();
    }

    function peek() {
        checkEmpty();
        if (popData.length === 0) {
            return pushData[0];
        }
        return popData[popData.length - 1];
    }

    function getSize() {
        return size;
    }

    return {pop, getSize, peek, push};
}
const myQueue = queueTwoStacks();
try {
    myQueue.pop();
    console.error("Failed: Should throw on empty pop");
} catch (e) {}
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
try {
    myQueue.peek();
    console.error("Failed: Should throw on empty pop");
} catch (e) {}