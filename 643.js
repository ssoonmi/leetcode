

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums[0];
    let maxAvg = -Infinity;
    let i = 0;
    let j = 1;
    while (j < nums.length + 1) {
        const length = j - i;
        if (length < k) {
            sum += nums[j];
            j++;
            continue;
        }
        const avg = sum / length;
        if (avg !== Infinity && maxAvg < avg) {
            maxAvg = avg;
        }
        if (length === k) {
            sum -= nums[i];
            i++;
        }
    }
    return maxAvg;
};
