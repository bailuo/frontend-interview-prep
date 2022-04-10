let first = null;
let last = null;

var treeToDoublyList = function (root) {
    if (!root) {
        return null;
    }
    first = null;
    last = null;
    treeHelper(root);
    first.left = last;
    last.right = first;
    return first;
};
// inorder traversal
function treeHelper(root) {
    if (!root) {
        return;
    }
    const { left, right } = root;
    treeHelper(left);
    //TODO process the root itself
    if (first === null) {
        first = root;
    }
    if (last !== null) {
        root.left = last;
        last.right = root;
    }
    last = root;
    treeHelper(right);
}
