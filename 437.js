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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum, take = false) {
    let numSums = 0;
    if (!root) return numSums;
    const newSum = targetSum - root.val;
    if (newSum === 0) {
        numSums++;
    }
    numSums += pathSum(root.left, newSum, true);
    if (!take) numSums += pathSum(root.left, targetSum);
    numSums += pathSum(root.right, newSum, true);
    if (!take) numSums += pathSum(root.right, targetSum);
    return numSums;
};
