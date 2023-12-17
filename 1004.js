/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    let numOnesFlipped = 0;
    let numOnes = 0;
    let maxOnes = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            if (numOnesFlipped < k) {
                numOnesFlipped++;
                numOnes++;
            } else if (numOnesFlipped === k) {
                let j = i - numOnes;
                while (nums[j] === 1) {
                    numOnes--;
                    j++;
                }
            }
        } else {
            numOnes++;
        }
        if (i >= k - 1) maxOnes = Math.max(maxOnes, numOnes);
    }
    return maxOnes;
};
