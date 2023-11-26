/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const stack = [Infinity, Infinity];
    let i = 0;
    while (i < nums.length) {
        const num = nums[i];
        if (num > stack[1] && num > stack[0]) return true;
        if (nums[i] > stack[0]) {
            stack[1] = nums[i];
        } else {
            stack[0] = nums[i];
        }
        i++;
    }
    return false;
};
