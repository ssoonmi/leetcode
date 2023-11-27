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
var maxLevelSum = function(root) {
    const queue = [[root, 1]];
    let sum = 0;
    let currentDepth = 1;
    let maxDepth = 0;
    let maxSum = -Infinity;
    while (queue.length) {
        const [node, depth] = queue.shift();
        if (!node) continue;
        if (currentDepth !== depth) {
            if (maxSum < sum) {
                maxDepth = currentDepth;
                maxSum = sum;
            }
            currentDepth = depth;
            sum = 0;
        }
        sum += node.val;
        queue.push([node.left, depth + 1]);
        queue.push([node.right, depth + 1]);
    }
    if (maxSum < sum) {
        return currentDepth;
    }
    return maxDepth;
};
