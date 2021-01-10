interface TreeNode {
    value: number;
    left: TreeNode | null;
    right: TreeNode | null;
}

function insertTreeNode(root: TreeNode | null, node: TreeNode): void {
    if (!root || !node) {
        return;
    }
    if (node.value > root.value) {
        if (!root.right) {
            root.right = node;
        } else {
            insertTreeNode(root.right, node);
        }
    } else {
        if (node.value < root.value) {
            if (!root.left) {
                root.left = node;
            } else {
                insertTreeNode(root.left, node);
            }
        }
    }
}

function preOrderPrint(): void {}

function inOrderPrint(): void {}
