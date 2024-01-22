/*
10:16pm-10:45pm

construct the binary tree from preorder and inorder
preorder is the root first then left then right
inorder is the left first then root then right

questions:
will there be any duplicate values? no


// first element in the preorder is the root
// all elements up to that value in the inorder is the left side
// first element plus left elements in the preorder determines the beginning of the right side

keep track of the index of the preorder left values
keep track of the index of the inorder root value
recursively call the dfs traversal on the left side after making the root node from the known indexes
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    const root = new TreeNode(preorder[0]);
    function dfs(root, pS, pE, iS) {
        if (pS > pE) return;
        let lengthOfLeftNodes = 0;
        let i = iS;
        while (inorder[i] !== root.val) {
            lengthOfLeftNodes++;
            i++;
        }
        const leftIndex = pS;
        if (lengthOfLeftNodes && leftIndex in preorder) {
            // console.log(leftIndex);
            root.left = new TreeNode(preorder[leftIndex]);
            dfs(
                root.left,
                leftIndex + 1,
                leftIndex + lengthOfLeftNodes - 1,
                iS
            );
        }
        const rightIndex = pS + lengthOfLeftNodes;
        if (rightIndex <= pE && rightIndex in preorder) {
            // console.log(rightIndex);
            root.right = new TreeNode(preorder[rightIndex]);
            dfs(
                root.right,
                rightIndex + 1,
                pE,
                iS + 1 + lengthOfLeftNodes,
            );
        }
    }
    dfs(root, 1, preorder.length - 1, 0);
    return root;
};
