const upsideDown = (root) => {
    if (!root) {
        return null;
    }
    let parent = null;
    let sibling = null;
    while (root) {
        const { left, right } = root;
        root.left = sibling;
        root.right = parent;
        parent = root;
        sibling = right;
        root = left;
    }

    return parent;
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

const upsideDownBinaryTree = function (root) {
    // return upsideDown(root)
    return upsideDownHelper(root, null, null);
};
