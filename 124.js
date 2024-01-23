/*
3:27pm-5:20pm

        -3
       / \
      4.  5
     /   / \
    9   -1  -4

15 => 9 + 4 + -3 + 5 => 15

       -20
       / \
      4.  5
     /   / \
    9   -1  -4

path sums:
        -20             -20
        /  \            /. \
      -16   2          -16  -11
      /    /  \
     -7   1   -2

       4        9
      /
     13

       5            -1         -4
      /. \
     -4   -1

13 => 9 + 4 => 13

        -20
        /
       4

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
var maxPathSum = function(root) {
    let maxSum = -Infinity;
    function dfs(root) {
        if (!root) return -Infinity;
        const leftSum = dfs(root.left);
        const rightSum = dfs(root.right);
        maxSum = Math.max(
            maxSum,
            root.val,
            root.val + leftSum,
            root.val + rightSum,
            root.val + leftSum + rightSum,
        );
        return Math.max(
            root.val,
            root.val + leftSum,
            root.val + rightSum,
        );
    }
    dfs(root);
    return maxSum;
};
