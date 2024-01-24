/*
all possible subsets that may contain duplicates
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);
    const set = new Set();
    const res = [];
    function dfs(i, subset) {
        if (i >= nums.length) {
            const str = subset.join(',');
            if (set.has(str)) return;
            set.add(str);
            return res.push(subset);
        }
        dfs(i + 1, [...subset, nums[i]]);
        dfs(i + 1, subset);
    }
    dfs(0, []);
    return res;
};
