/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2, i = 0, j = 0, memo = {}) {
    if (i >= text1.length) return 0;
    if (j >= text2.length) return 0;
    if (i in memo && j in memo[i]) return memo[i][j];
    let maxLength = text1[i] === text2[j] ? (
        1 + longestCommonSubsequence(text1, text2, i + 1, j + 1, memo)
    ) : 0;
    if (i < text1.length - 1) {
        maxLength = Math.max(longestCommonSubsequence(text1, text2, i + 1, j, memo), maxLength);
    }
    if (j < text2.length - 1) {
        maxLength = Math.max(longestCommonSubsequence(text1, text2, i, j + 1, memo), maxLength);
    }
    if (!(i in memo)) memo[i] = {};
    memo[i][j] = maxLength;
    return memo[i][j];
};
