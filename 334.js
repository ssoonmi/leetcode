/**
 * @param {number[]} nums
 * @return {boolean}
 */
// stack = []
// [1, 2, 3] => true
// [2, 4, 1, 3] => true
// [4, 3, 2] => false
var increasingTriplet = function(nums) {
    let stack = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        let lastMin = stack[stack.length - 1];
        if (nums[i] > lastMin) {
            stack.push(nums[i]);
        } else {
            let lastMinIdx = stack.length - 1;
            while (lastMinIdx > 0 && nums[i] <= stack[lastMinIdx - 1]) {
                lastMinIdx--;
            }
            stack[lastMinIdx] = nums[i];
        }
        if (stack.length === 3) return true;
    }
    return false;
};
