function createDoubleStackQueue() {
    const that = {};
    const pushContainer = [];
    const popContainer = [];

    function moveElementToPopContainer() {
        while (pushContainer.length !== 0) {
            const element = pushContainer.pop();
            popContainer.push(element);
        }
    }

    that.push = function(element) {
        pushContainer.push(element);
    };

    that.shift = function() {
        if (popContainer.length === 0) {
            moveElementToPopContainer();
        }
        if (popContainer.length === 0) {
            return null;
        } else {
            return popContainer.pop();
        }
    };

    that.front = function() {
        if (popContainer.length === 0) {
            moveElementToPopContainer();
        }
        if (popContainer.length === 0) {
            return null;
        }
        return popContainer[popContainer.length - 1];
    };

    that.length = function() {
        return pushContainer.length + popContainer.length;
    };

    that.isEmpty = function() {
        return (pushContainer.length + popContainer.length) === 0;
    };

    return that;
}