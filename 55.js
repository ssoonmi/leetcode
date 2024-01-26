/*
10:12pm-10:21pm (9 min)
input:
nums array
maximum jump length at that position
return true if you can reach the last index or false otherwise

example:
[2, 3, 1, 1, 4]

brute force:
from each step we can take, calculate if we can get to the end
[5, 3, 0, 2, 0]
O(n^2)

optimization:
[2, 3, 1, 1, 4]
    1  2  1  0
time complexity: O(n)
space complexity: O(1)
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let numJumps = 1;
    for (let i = 0; i < nums.length - 1; i++) {
        numJumps--;
        const num = nums[i];
        if (numJumps < num) {
            numJumps = num;
        }
        if (numJumps <= 0) return false;
    }
    return true;
};
