/*
hashmap of the frequencies of the numbers where the key is the frequency and the value is an array of the numbers
sort the frequencies
then return the value in the hashmap for the most frequent numbers
*/

/*
Solve with a max heap:
- create a map of all the numbers to frequencies
- heapify the frequencies and the numbers by frequency: O(n) time complexity
- pull k most frequent elements out of the heap and return the numbers
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Time complexity: O(n + mlogm) where n is the number of numbers, m is the number of unique numbers - could be reduced to O(n) because m will never be greater than n
    // Space complexity: O(n + m) - could be reduced to O(n) because m will never be greater than n
    const freqs = {};
    const numsToFreqs = {};
    for (const num of nums) {
        if (!(num in numsToFreqs)) numsToFreqs[num] = 0;
        numsToFreqs[num]++;
    }
    for (const num in numsToFreqs) {
        const freq = numsToFreqs[num];
        if (!(freq in freqs)) {
            freqs[freq] = [];
        }
        freqs[freq].push(num);
    }
    const sortedFreqs = Object.keys(freqs).sort((a, b) => Number(b) - Number(a));
    const res = [];
    for (let i = 0; i < sortedFreqs.length; i++) {
        const freq = sortedFreqs[i];
        for (const num of freqs[freq]) {
            res.push(num);
            if (res.length === k) return res;
        }
    }
    return res;
};
