/*
3:41pm-3:48pm
return the values of the node from top to bottom
        1
       /.\
      2.  3
     /.  /
    4.   7
     \
      9
[1, 3, 7, 9]
find all the nodes at each level and take the right most node and at it to the result
keep track of the level of each node in bfs search
and overwrite the value at the index at the result when traversing the tree bfs left to right
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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const res = [];
    const queue = [root];
    let level = 0;
    while (queue.length) {
        const numNodesInLevel = queue.length;
        for (let i = 0; i < numNodesInLevel; i++) {
            const node = queue.shift();
            if (!node) continue;
            res[level] = node.val;
            queue.push(node.left);
            queue.push(node.right);
        }
        level++;
    }
    return res;
};
