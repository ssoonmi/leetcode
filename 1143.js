/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2, i = 0, j = 0, memo = {}) {
    if (i >= text1.length || j >= text2.length) return 0;
    if (i in memo && j in memo[i]) return memo[i][j];
    let maxSubsequence = text1[i] === text2[j] ?
        1 + longestCommonSubsequence(text1, text2, i + 1, j + 1, memo) :
        Math.max(
            longestCommonSubsequence(text1, text2, i, j + 1, memo),
            longestCommonSubsequence(text1, text2, i + 1, j, memo),
        );
    if (!(i in memo)) memo[i] = {};
    memo[i][j] = maxSubsequence;
    return maxSubsequence;
};
