/*
3:20pm-3:55pm
k
nums
can only see k numbers in the window
return the maximum value in the sliding window

will there be any negative numbers in the array?
will the k value always be less than the length of the array?
can be there be any duplicates in the array?

2 pointers: i = 0, j = k + 1
keep track of the maximum value
start the maximum value as the max value of the first k values.
the first k values will have a max sliding window value of that initial max value
update the sliding window by determining if the maximum value needs to be changed
to determine this, I need to keep track of the frequency of the numbers and determine if the max value changes whenever we slide the window, for example, we could decrement the max value until it reaches zero in the freq map then calculate the next max value by searching through the freq map

k = 3
maxValue = 5
freqMap = { 1: 0, 3: 1: 4: 0, -1: 0, 2: 1, 5: 1 }
1   3   4   4   -1  2   5   3
0   1   2   3   4   5   6   7
                        i
                            j

       [4, 4, 4, 4, 5, 5, 5, 5]

time complexity worst case = O(n2) where n is the length of the numbers array
space complexity worst case = O(k)
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums.length) return [];
    let maxValue = -Infinity;
    const freq = {};
    for (let i = 0; i < k; i++) {
        const num = nums[i];
        if (!(num in freq)) freq[num] = 0;
        freq[num]++;
        if (num > maxValue) maxValue = num;
    }
    let res = [maxValue];
    // nums = 1, 3, 4, 4, 2
    // maxValue = 4
    // k = 2
    // freq = { 4: 1, 2: 1 }
    // res = [3, 3, 4, 4, 4]
    let j = k - 1; // 4
    for (let i = 0; i < nums.length - k; i++) { // 4
        const prevIVal = nums[i]; // 4
        const nextJVal = nums[j + 1]; // 2
        if (nextJVal > maxValue) maxValue = nextJVal; // 4
        if (!(nextJVal in freq)) freq[nextJVal] = 0;
        freq[nextJVal]++;
        freq[prevIVal]--;
        if (freq[prevIVal] === 0) delete freq[prevIVal];
        if (prevIVal === maxValue && !(prevIVal in freq)) {
            maxValue = Math.max(...Object.keys(freq));
        }
        res.push(maxValue);
        j++;
    }
    return res;
};
