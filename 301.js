/*
7:49pm-8:06pm (17 min)

Input: s = "()())()"
Output: ["(())()","()()()"]

first, calculate the minimum number of removals needed by:
keeping track of the open parentheses and closing parentheses count
if open < closed at any given point, closed = open, and num removals++
if open > closed at the end, num removals = open - closed
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
    let numOpen = 0;
    let numClosed = 0;
    let numRemovals = 0;
    for (const char of s) {
        if (char === '(') numOpen++;
        if (char === ')') numClosed++;
        if (numOpen < numClosed) {
            numClosed = numOpen;
            numRemovals++;
        }
    }
    numRemovals += numOpen - numClosed;
    const res = [];
    const seen = new Set();
    function backtrack(i, str, numOpen, numClosed, numRemovalsLeft) {
        const key = `${i}-${str}`;
        if (seen.has(key)) return;
        seen.add(key);
        if (i >= s.length && numOpen === numClosed && numRemovalsLeft === 0) {
            return res.push(str);
        }
        if (numRemovals < 0) return;
        if (i >= s.length) return;
        if (numClosed > numOpen) return;
        const char = s[i];
        backtrack(
            i + 1,
            str + char,
            numOpen + (char === '(' ? 1 : 0),
            numClosed + (char === ')' ? 1 : 0),
            numRemovalsLeft,
        );
        backtrack(
            i + 1,
            str,
            numOpen,
            numClosed,
            numRemovalsLeft - 1,
        );
    }
    backtrack(0, '', 0, 0, numRemovals);
    return res;
};
