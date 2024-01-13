/*
n pairs of parentheses
generate all combinations of well-formed parentheses

should the function return an output array where each element is a string of valid generated parentheses?
does the order of generated parentheses matter?

ex: n = 3
()()()  ()(())  (())()  ((()))  (()())

(()))(
how many open parentheses we have so that we don't have more closed parentheses than open parentheses

keep track of how many open parens we used and how many closed parens we used in a string when generating it
until there are no closed parens left, we can keep adding open or closed parens

recursive algorithm where parameters are: n, string generated, the number of open parens, the number of closed parens

until n is 0 and the number of closed parens matches the open parens, keep adding to the string
either add a open parens or a closed parens to the string
if closed parens = open parens, then we can't add another closed parens though

O(2^n) time complexity
O(2^n) space complexity
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const res = [];
    function generateString(str, numOpenLeft, numClosedLeft) {
        if (numOpenLeft === 0 && numClosedLeft === 0) return res.push(str);
        if (numClosedLeft > numOpenLeft) {
            generateString(str + ')', numOpenLeft, numClosedLeft - 1);
        }
        if (numOpenLeft > 0) {
            generateString(str + '(', numOpenLeft - 1, numClosedLeft);
        }
    }
    generateString('', n, n);
    return res;
};
