/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    const origCount = {};
    let origNumChars = 0;
    for (const char of s1) {
        if (!(char in origCount)) {
            origCount[char] = 0;
        }
        origNumChars++;
        origCount[char]++;
    }
    let count = {};
    let i = 0;
    let j = 0;
    while (j < s2.length) {
        const char = s2[j];
        if (!(char in origCount)) {
            count = {};
            i = j + 1;
        } else {
            if (!(char in count)) count[char] = 0;
            count[char]++;
            while (count[char] > origCount[char]) {
                count[s2[i]]--;
                i++;
            }
            if (j - i + 1 === origNumChars) return true;
        }
        j++;
    }
    return false;
};
