/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    let numChars1 = 0;
    const freq1 = {};
    for (const char of word1) {
        if (!(char in freq1)) {
            freq1[char] = 0;
            numChars1++;
        }
        freq1[char]++;
    }
    let numChars2 = 0;
    const freq2 = {};
    for (const char of word2) {
        if (!(char in freq1)) return false;
        if (!(char in freq2)) {
            freq2[char] = 0;
            numChars2++;
        }
        freq2[char]++;
    }
    if (numChars1 !== numChars2) return false;
    const otherFreq = {};
    let checkFreq = false;
    for (const char in freq1) {
        if (char in freq2 && freq1[char] === freq2[char]) {
            delete freq1[char];
            delete freq2[char];
        } else {
            if (!(freq1[char] in otherFreq)) otherFreq[freq1[char]] = 0;
            otherFreq[freq1[char]]++;
            checkFreq = true;
        }
    }
    if (!checkFreq) return true;
    for (const char in freq2) {
        if (!(freq2[char]) in otherFreq) return false;
        else {
            otherFreq[freq2[char]]--;
            if (otherFreq[freq2[char]] === 0) delete otherFreq[freq2[char]];
        }
    }
    return Object.keys(otherFreq).length === 0;
};
