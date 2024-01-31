/*
3:05pm-3:19pm
given a string s, find the length of the longest substring without
repeating characters

questions: what kinds of characters can the string have? English letters only?

brute force:
find all the substrings and count the characters for each one
time complexity: O(n^2)
space complexity: O(n)

optimal:
sliding window problem
abcabcbb
       i
       j
maxLength = 3
currLength = 1
set of seen characters (b)

time complexity: O(n) where n is the num of characters in the string
space complexity: O(n)
*/

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let i = 0;
    let j = 0;
    let maxLength = 0;
    const seen = new Set();
    while (j < s.length) {
        while (seen.has(s[j])) {
            seen.delete(s[i]);
            i++;
        }
        seen.add(s[j]);
        maxLength = Math.max(maxLength, j - i + 1)
        j++;
    }
    return maxLength;
};
