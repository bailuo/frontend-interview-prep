// BFS solution
var rightSideView = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    let preLeveQueue = [root];
    let currLevelQueue = [];
    // process each element in the queue, and replace old queue with new queue
    while (preLeveQueue.length) {
        // process left node first
        const node = preLeveQueue.shift();
        // push left node first, then the right node
        if (node.left) currLevelQueue.push(node.left);
        if (node.right) currLevelQueue.push(node.right);
        // when the queue is empty, the node exposed to the right side of view is processed
        if (!preLeveQueue.length) {
            result.push(node.val);
            preLeveQueue = currLevelQueue;
            currLevelQueue = [];
        }
    }
    return result;
};

// since Javascript has a performance issue with shift pop push unshift function. we can change the code a little to imporve the performance

var rightSideView = function (root) {
    if (!root) {
        return [];
    }
    const result = [];
    let preLeveQueue = [root];
    let currLevelQueue = [];
    let i = -1;
    while (++i < preLeveQueue.length) {
        const node = preLeveQueue[i];
        if (node.left) currLevelQueue.push(node.left);
        if (node.right) currLevelQueue.push(node.right);
        if (i === preLeveQueue.length - 1) {
            result.push(node.val);
            preLeveQueue = currLevelQueue;
            currLevelQueue = [];
            // it is important to reset the number back to -1
            i = -1;
        }
    }
    return result;
};
