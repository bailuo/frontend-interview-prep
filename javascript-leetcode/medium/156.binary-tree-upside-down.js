var upsideDownBinaryTree = function (root) {
    return upsideDownHelper(root, null, null);
};

function upsideDownHelper(root, parent = null, sibling) {
    if (!root) {
        return null;
    }
    const { left, right } = root;
    root.left = sibling;
    root.right = parent;
    return left ? upsideDownHelper(left, root, right) : root;
}
