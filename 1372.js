// Old Case 2: [1,1,1,null,1,null,null,1,1,null,1]

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
const dfs = function(root, wasLeft, streak) {
    if (!root) return streak;
    if (wasLeft) {
        return Math.max(
            dfs(root.left, true, 0),
            dfs(root.right, false, streak + 1)
        );
    } else {
        return Math.max(
            dfs(root.right, false, 0),
            dfs(root.left, true, streak + 1)
        );
    }
}
// var longestZigZag = function(root) {
var longestZigZag = function(root, wasLeft = null, streak = 0) {
    // let longest = 0;
    // const stack = [{ node: root, streak: 0, wasLeft: null }];
    // while (stack.length) {
    //     const { node, streak, wasLeft } = stack.pop();
    //     if (node) {
    //         longest = Math.max(longest, streak);
    //         stack.push({
    //             node: node.right,
    //             streak: wasLeft === true ? streak + 1 : 1,
    //             wasLeft: false,
    //         });
    //         stack.push({
    //             node: node.left,
    //             streak: wasLeft === false ? streak + 1 : 1,
    //             wasLeft: true,
    //         });
    //     }
    // }
    // return longest;
    // return Math.max(
    //     dfs(root.left, true, 0),
    //     dfs(root.right, false, 0)
    // )
    if (!root) return streak;
    if (wasLeft === null) {
        return Math.max(
            longestZigZag(root.left, true, 0),
            longestZigZag(root.right, false, 0)
        );
    }
    if (wasLeft) {
        return Math.max(
            longestZigZag(root.right, false, streak + 1),    
            longestZigZag(root.left, true, 0)
        );
    } else {
        return Math.max(
            longestZigZag(root.left, true, streak + 1),
            longestZigZag(root.right, false, 0)
        );
    }
    if (wasLeft === null || wasLeft === true) {
        let leftLongest = 0;
        if (wasLeft === true) {
            leftLongest++;
        }
        leftLongest += longestZigZag(root.right, false);
        longest = Math.max(longest, leftLongest);
    }
    if (wasLeft === null || wasLeft === false) {
        let rightLongest = 0;
        if (wasLeft === false) {
            rightLongest++;
        }
        rightLongest += longestZigZag(root.left, true);
        longest = Math.max(longest, rightLongest);
    }
    longest = Math.max(longest, longestZigZag(root.left, null));
    longest = Math.max(longest, longestZigZag(root.right, null));
    return longest;
};
