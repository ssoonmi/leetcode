/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const freq = {};
    for (const num of arr) {
        if (!(num in freq)) freq[num] = 0;
        freq[num]++;
    }
    const freqSet = new Set();
    for (const num in freq) {
        if (freqSet.has(freq[num])) return false;
        freqSet.add(freq[num]);
    }
    return true;
};
