/*
8:54pm-9:49pm
serialize / deserialize a tree
TreeNode { val: 2, left: TreeNode { val: 1, left: null, right: null }, right: null }
    2
   /
  1
{ val: 2, left: { val: 1 }}
JSON in JavaScript

[value, leftNode, rightNode]
[2, [1], null or undefined] or [2, [1]]
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) return 'N';
    return `${root.val},${serialize(root.left)},${serialize(root.right)}`;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    let i = 0;
    function dft() {
        if (i >= data.length) return null;
        if (data[i] === 'N') {
            i += 2;
            return null;
        }
        let num = '';
        while (i < data.length && data[i] !== ',') {
            num += data[i];
            i++;
        }
        i++;
        const node = new TreeNode(Number(num));
        node.left = dft();
        node.right = dft();
        return node;
    }
    return dft();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
