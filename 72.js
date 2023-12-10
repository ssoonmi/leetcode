/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2, i = 0, j = 0, memo = {}) {
    if (!(word1 in memo)) memo[word1] = {};
    if (word1 === word2) {
        memo[word1][word2] = 0;
        return 0;
    }
    if (i >= word1.length) {
        if (word1 === word2.slice(0, word1.length)) return word2.length - word1.length;
        else return Infinity;
    }
    if (j >= word2.length) {
        if (word1.slice(0, word2.length) === word2) return word1.length - word2.length;
        else return Infinity;
    }
    if (word1 in memo && word2 in memo[word1]) return memo[word1][word2];
    memo[word1][word2] = Math.min(
        // continue if characters are the same
        word1[i] === word2[j] ? minDistance(word1, word2, i + 1, j + 1, memo) : Infinity,
        // insert a character
        1 + minDistance(word1.slice(0, i) + word2[j] + word1.slice(i), word2, i + 1, j + 1, memo),
        // delete a character
        1 + minDistance(word1.slice(0, i) + word1.slice(i + 1), word2, i, j, memo),
        // replace a character
        1 + minDistance(word1.slice(0, i) + word2[j] + word1.slice(i + 1), word2, i + 1, j + 1, memo),
    );
    return memo[word1][word2];
};
