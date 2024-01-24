/*
9:35pm-9:53pm
nums distinct integers
all possible permutations

Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

          2,3                       3, 2
    /      |     \
  1,2,3  2,1,3  1,2,3
permutations([2, 3]) => [[2, 3], [3, 2]]
=> add 1 in front of it: [[1, 2, 3], [1, 3, 2]]
=> add 1 to the middle of it: [[2, 1, 3], [3, 2, 1]]
=> add 1 to the end of it: [[2, 3, 1], [3, 2, 1]]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums, k = 0) {
    if (k === nums.length) return [[]];
    const perms = permute(nums, k + 1);
    const res = [];
    const num = nums[k];
    for (const perm of perms) {
        let i = 0;
        while (i <= perm.length) {
            const newPerm = [];
            for (let j = 0; j <= perm.length; j++) {
                if (j === i) {
                    newPerm.push(num);
                }
                if (j < perm.length) newPerm.push(perm[j]);
            }
            res.push(newPerm);
            i++;
        }
    }
    return res;
};
