/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    const count1 = {};
    const count2 = {};
    if (word1.length !== word2.length) return false;
    for (let i = 0; i < word1.length; i++) {
        if (!(word1[i] in count1)) count1[word1[i]] = 0;
        if (!(word2[i] in count2)) count2[word2[i]] = 0;
        count1[word1[i]]++;
        count2[word2[i]]++;
    }
    const keys1 = Object.keys(count1);
    const keys2 = Object.keys(count2);
    const numValues = {};
    if (keys1.length !== keys2.length) return false;
    for (let i = 0; i < keys1.length; i++) {
        if (!(keys1[i] in count2)) return false;
        const val1 = count1[keys1[i]];
        const val2 = count2[keys1[i]];
        if (val1 !== val2) {
            if (!(val1 in numValues)) {
                numValues[val1] = 0;
            }
            if (!(val2 in numValues)) {
                numValues[val2] = 0;
            }
            numValues[val1]++;
            numValues[val2]--;
            if (numValues[val2] === 0) {
                delete numValues[val2];
            }
            if (numValues[val1] === 0) {
                delete numValues[val1];
            }
        }
    }
    return Object.keys(numValues).length === 0;
};
