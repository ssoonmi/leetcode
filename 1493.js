/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let deleted = false;
    let size = 0;
    let maxSize = 0;
    for (let i = 0; i < nums.length; i++) {
        if (deleted && nums[i] === 0) {
            let j = i - size - 1;
            deleted = false;
            while (!deleted) {
                if (nums[j] === 0) deleted = true;
                else {
                    size--;
                    j++;
                }
            }
        } else if (!deleted && nums[i] === 0) {
            deleted = true;
        } else {
            size++;
        }
        maxSize = Math.max(maxSize, size);
    }
    return deleted ? maxSize : maxSize - 1;
};
