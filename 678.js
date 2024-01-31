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
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let leftMin = 0;
    let leftMax = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            leftMax++;
            leftMin++;
        } else if (char === ')') {
            leftMin--;
            leftMax--;
        } else {
            leftMin--;
            leftMax++;
        }
        if (leftMin < 0) leftMin = 0;
        if (leftMax < 0) return false;
    }
    return leftMin === 0;
};
