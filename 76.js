/*
1:35pm - 2:12pm => 40min
s and t
every charcter in t (including duplicates) is included in the window
if there is no such substring, return empty string

Are all the characters going to be alphabetical? alphanumerical, etc? Include symbols?/
Is it guaranteed that t will be less in length than s?
If not, if t is greater in length than s, then there is no valid substring, correct?
Can there be multiple correct substrings?

t = ABC, s = DABDECC
minimum window = "ABDEC"
tNumChars = 3
sNumChars = 2

tCount = { A: 1, B: 1, C: 1 }
sCount = { D: 1 } (i = 0, j = 1)
sCount = { A: 1 } (i = 1, j = 2)
sCount = { A: 1, B: 1 } (i = 1, j = 3)
sCount = { A: 1, B: 1, D: 1 } (i = 1, j = 4)
sCount = { A: 1, B: 1, D: 1, E: 1 } (i = 1, j = 5)
sCount = { A: 0, B: 1, D: 1, E: 1, C: 2 } (i = 1, j = 6)

DABDECC
0123456
    i
       j

O(n) time complexity where n is equal to length of s (because s should be greater in length than t)
O(1) space complexity because the number of unique characters that could be in a is 26 * 2 (52) alphabetical characters
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const tCount = {};
    const sCount = {};
    let tNumChars = 0;
    let sNumChars = 0;
    for (const char of t) {
        tNumChars++;
        if (!(char in tCount)) tCount[char] = 0;
        tCount[char]++;
    }
    let i = 0;
    let j = 0;
    let resI = null;
    let resJ = null;
    while (j < s.length) {
        while (i < j && (!(s[i] in tCount) || tCount[s[i]] < sCount[s[i]])) {
            sCount[s[i]]--;
            if (sCount[s[i]] === 0) delete sCount[s[i]]
            i++;
        }
        if (tNumChars === sNumChars) {
            if (j - i === t.length) return s.slice(i, j);
            if (resI === null || resJ - resI > j - i) {
                resI = i;
                resJ = j;
            }
            sCount[s[i]]--;
            if (sCount[s[i]] < tCount[s[i]]) sNumChars--;
            if (sCount[s[i]] === 0) delete sCount[s[i]];
            i++;
        } else {
            const jChar = s[j];
            if (!(jChar in sCount)) sCount[jChar] = 0;
            sCount[jChar]++;
            if (jChar in tCount && sCount[jChar] <= tCount[jChar]) {
                sNumChars++;
            }
            j++;
        }
    }
    if (tNumChars === sNumChars) {
        if (resI === null || resJ - resI > j - i) {
            resI = i;
            resJ = j;
        }
    }
    if (resI === null) return '';
    return s.slice(resI, resJ);
};
