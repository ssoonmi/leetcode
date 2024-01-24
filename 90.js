/*
all possible subsets that may contain duplicates
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    function dfs(i, subset) {
        if (i >= nums.length) return res.push(subset);
        let j = i;
        while (nums[j] === nums[i]) {
            j++;
        }
        dfs(i + 1, [...subset, nums[i]]);
        dfs(j, subset);
    }
    dfs(0, []);
    return res;
};
