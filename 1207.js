/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const count = {};
    for (const num of arr) {
        if (!(num in count)) count[num] = 0;
        count[num]++;
    }
    const values = Object.values(count);
    return new Set(values).size === values.length;
};
