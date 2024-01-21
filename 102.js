/*
3:20pm-3:26pm
return the level order traversal of its nodes' values
left to right, level by level

        3
       / \
      9.  20
          / \
         15  7
[[3], [9, 20], [15, 7]]

do a bfs or dfs through the tree
for a dfs, each stack call will have the node and the depth of the node as its inputs
it will add the node to the nested array at the index that corresponds to its depth
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
var levelOrder = function(root) {
    const res = [];
    // function dfs(root, depth) {
    //     if (!root) return;
    //     if (!Array.isArray(res[depth])) res[depth] = [];
    //     res[depth].push(root.val);
    //     dfs(root.left, depth + 1);
    //     dfs(root.right, depth + 1);
    // }
    // dfs(root, 0);
    // return res;
    const stack = [[root, 0]];
    while (stack.length) {
        const [node, depth] = stack.pop();
        if (!node) continue;
        if (!Array.isArray(res[depth])) res[depth] = [];
        res[depth].push(node.val);
        stack.push([node.right, depth + 1]);
        stack.push([node.left, depth + 1]);
    }
    return res;
};
