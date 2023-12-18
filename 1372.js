/*
        0
       / \
      1   4
     /     \
    3       2
           / \
          5   6

0 null  => 0 + 3
1 true  => 1 + 1 + 1
2 false => 1 + 1
5 true  => 1

0 null  => 0
4 false => 0 + 2
2 false => 1 + 1
5 true  => 1
*/
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
 * @return {number}
 */
var longestZigZag = function(root, isLeft = null, maxZigZag = 0) {
    if (!root) return maxZigZag;
    if (isLeft === null) {
        return Math.max(
            longestZigZag(root.left, true, 0),
            longestZigZag(root.right, false, 0)
        );
    }
    return Math.max(
        longestZigZag(root.left, true, isLeft ? 0 : maxZigZag + 1),
        longestZigZag(root.right, false, isLeft ? maxZigZag + 1 : 0)
    );
};
