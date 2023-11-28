const findMinNode = function(root) {
    if (!root || !root.left) return root;
    return findMinNode(root.left);
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function(root, key) {
    if (!root) return null;
    if (root.val === key) {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        if (!root.right && !root.left) return null;
        const minNode = findMinNode(root.right); // find leftmost node on the right
        minNode.left = root.left;
        return root.right;
    }
    if (root.val > key) root.left = deleteNode(root.left, key);
    else root.right = deleteNode(root.right, key);
    return root;
};
