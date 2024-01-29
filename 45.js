/*
10:22pm
inputs:
nums

return the minimum number of jumps to reach nums[n - 1]

[2, 3, 1, 1, 4] => 2
    i
jumps = 2 (0 + 2 <= 4 so we need to find a better jump)
jumps = 3 (1 + 3 <= 4 ? yes)
2 -> 3 -> 4

O(n) time complexity
O(1) space complexity
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    // [2, 3, 1, 1, 4]
    // [2, 3, 1]
    let i = 0;
    let j = 1;
    let numJumps = 0;
    let maxIdx = -Infinity;
    while (j < nums.length) {
        numJumps++;
        for (let k = i; k < j; k++) {
            maxIdx = Math.max(maxIdx, nums[k] + k);
            if (maxIdx >= nums.length - 1) return numJumps;
        }
        i = j;
        j = maxIdx + 1;
    }
    return numJumps;
};
