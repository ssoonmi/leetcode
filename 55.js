/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxJump = 0;
    for (const num of nums) {
        if (maxJump < 0) return false;
        if (num > maxJump) maxJump = num;
        maxJump--;
    }
    return true;
};
