// Time complexity: O(mn * m), Space complexity: O(mn * m)
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


// Time complexity: O(mn), Space complexity: O(mn + m + n) = O(mn)
// var minDistance = function(word1, word2, i = word1.length, j = word2.length, memo = {}) {
//     if (!(i in memo)) memo[i] = {};
//     if (i <= 0) return j;
//     if (j <= 0) return i;
//     if (i in memo && j in memo[i]) return memo[i][j];
//     // continue if characters are the same
//     if (word1[i - 1] === word2[j - 1]) memo[i][j] = minDistance(word1, word2, i - 1, j - 1, memo);
//     else {
//         memo[i][j] = Math.min(
//             // insert a character
//             1 + minDistance(word1, word2, i, j - 1, memo),
//             // delete a character
//             1 + minDistance(word1, word2, i - 1, j, memo),
//             // replace a character
//             1 + minDistance(word1, word2, i - 1, j - 1, memo),
//         );
//     }
//     return memo[i][j];
// };

