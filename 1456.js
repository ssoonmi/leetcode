const VOWELS = 'aeiou';
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let maxV = 0;
    let numV = 0;
    for (let i = 0; i < s.length; i++) {
        if (VOWELS.includes(s[i])) {
            numV++;
        }
        if (i >= k) {
            if (VOWELS.includes(s[i - k])) {
                numV--;
            }
        }
        if (i >= k - 1) maxV = Math.max(maxV, numV);
    }
    return maxV;
};
