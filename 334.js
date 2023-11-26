/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    const stack = [];
    let i = 0;
    while (i < nums.length) {
        let j = stack.length - 1
        if (!stack.length || nums[i] > stack[j]) stack.push(nums[i]);
        else {
            while (j >= 0 && stack[j - 1] >= nums[i]) {
                j--;
            }
            stack[j] = nums[i];
        }
        if (stack.length === 3) return true;
        i++;
    }
    return stack.length === 3;
};
