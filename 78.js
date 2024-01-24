/*
Time complexity:
O(n * 2^n)
Space complexity:
O(n * 2^n)
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const res = [];
    // i = 0, subset = []
    // i = 1, subset = [1]
    // i = 2, subset = [1, 2]
    // i = 3, subset = [1, 2, 3]
    // i = 3, subset = [1, 2]
    // i = 2, subset = [1]
    // i = 3, subset = [1, 3]
    // i = 3, subset = [1]
    // i = 1, subset = []
    function dfs(i, subset) {
        if (i >= nums.length) return res.push(subset);
        dfs(i + 1, subset);
        dfs(i + 1, [...subset, nums[i]]);
    }
    dfs(0, []);
    return res;
};
