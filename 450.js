/*
    3
   / \
  2   5
     / \
    4   7
       / \
      6   8

    4
   / \
  2   5
       \
        7
       / \
      6   8
*/

const findAndDeleteLeftMostNode = function (root) {
    if (!root) return null;
    if (!root.left && !root.right) return root;
    if (!root.left) {
        deleteNode(root, root.val);
        return root;
    }
    const leftMostNode = findAndDeleteLeftMostNode(root.left);
    if (root.left === leftMostNode) {
        root.left = leftMostNode.right;
    }
    return leftMostNode;
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
        const leftMostNode = findAndDeleteLeftMostNode(root.right);
        if (leftMostNode !== root.right) {
            leftMostNode.right = root.right;
        }
        leftMostNode.left = root.left;
        return leftMostNode;
    } else {
        const leftNode = deleteNode(root.left, key);
        if (root.left === leftNode) root.right = deleteNode(root.right, key);
        root.left = leftNode;
        return root;
    }
};
