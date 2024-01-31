/*
10:03pm-10:19pm

given a string s containing only three types of characters (, ), and *, return 
true if s is valid

any ( must have a corresponding )
any ) must have a corresponding (
( must go before the corresponding )
* can be treated as (, ), or an empty string

examples:
() => true
(*) => true
((** => true
((()) => false

iterate through the string:
keep track of number of * characters seen in a stack
push index of left parentheses
pop from left stack when you see right parentheses, if left stack is empty, pop from * characters seen stack, if left and star stack are empty return false

after iterating,
return true if length of left stack is 0 OR end of star stack is greater than end of left stack

*(() => true
    i
left = [1]
stars = [0]

time complexity: O(n) where n is the length of the string
space complexity: O(s) where s is the length of the string
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const leftStack = [];
    const starStack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') leftStack.push(i);
        else if (char === '*') starStack.push(i);
        else {
            if (!leftStack.length && !starStack.length) return false;
            else if (leftStack.length) leftStack.pop();
            else if (starStack.length) starStack.pop();
        }
    }
    if (!leftStack.length) return true;
    while (leftStack.length) {
        if (
            !starStack.length ||
            starStack[starStack.length - 1] < leftStack[leftStack.length - 1]
        ) return false;
        leftStack.pop();
        starStack.pop();
    }
    return true;
};
