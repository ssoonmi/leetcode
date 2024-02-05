/**
7:21pm-7:43pm

Input: s = "lee(t(c)o)de)"
Output: "lee(t(c)o)de"

use a stack to keep track of all the string values between parentheses
iterate through the string
for each character, if the character is '(' add an empty string to the stack
if the character is ')' remove the string at the top of the stack, surround
it with parentheses, and then add the string to the string at the top of the
stack
if the character is not a parens, add the character to the string at the top
of the stack

O(n) time complexity
O(n) space complexity
*/

/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
    const stack = [''];
    for (const char of s) {
        if (char === '(') {
            stack.push('');
        } else if (char === ')') {
            if (stack.length > 1) {
                const str = stack.pop();
                stack[stack.length - 1] += '(' + str + ')';
            }
        } else {
            stack[stack.length - 1] += char;
        }
    }
    return stack.join('');
};
