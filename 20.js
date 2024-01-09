/*
s ({[]}) determine if input string is valid
open brackets closed by same type of brackets
open brackets must be closed in the correct order
every close bracket has a corresponding open bracket

invalid: ([{]})
valid: ([{}[]])

stack [  (, [, {  ]

iterate through the entire string
keep track of the open brackets in a stack structure
pop off the elements from the stack if the stack is a closed bracket
if it's no the same type as the open bracket popped off, then return false

if you get through the entire string without returning false, return true
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    for (const char of s) {
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char);
        } else {
            const open = stack.pop();
            if (
                (open === '(' && char === ')') ||
                (open === '{' && char === '}') ||
                (open === '[' && char === ']')
            ) continue;
            return false;
        }
    }
    return !stack.length;
};
