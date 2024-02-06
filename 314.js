/*
root of a binary tree
vertical order traversal
top to bottom
column by column
order should be from left to right

do a breadth first traversal
go all the way to the left first, increment column by 1 for going left
decrement column by 1 for going right
add the node to the hash map key as column and value as nodes in that column
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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    const res = {};
    const queue = [[root, 0]];
    let minColumn = Infinity;
    let maxColumn = -Infinity;
    while (queue.length) {
        const [node, column] = queue.shift();
        if (!node) continue;
        if (!(column in res)) res[column] = [];
        res[column].push(node.val);
        minColumn = Math.min(minColumn, column);
        maxColumn = Math.max(maxColumn, column);
        queue.push([node.left, column - 1]);
        queue.push([node.right, column + 1]);
    }
    const output = [];
    for (let i = minColumn; i <= maxColumn; i++) {
        output.push(res[i] || []);
    }
    return output;
};
