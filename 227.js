/*
6:50pm-7:58pm
3+2*2
3 / 2
skip spaces

evaluate * and / first
evaluate + and - last

3,+,2,*,2
3,+,4
12

create a stack
iterate through the string in reverse order and add values to the stack
group numbers together to add to the stack
pop off values from the stack and evaluate all * and /
push result into the stack
then pop off values from the stack and evaluate all + and /
push result into the stack
until you have one value in the stack
*/

/**
 * @param {string} s
 * @return {number}
 */
const OPERATIONS = '*/+-'
var calculate = function(s) {
    const stack = [];
    let number = '';
    let operation = '+';
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (!isNaN(char)) number += char;
        if (i === s.length - 1 || (isNaN(char) && char !== ' ')) {
            number = Number(number);
            if (operation === '+') stack.push(number);
            if (operation === '-') stack.push(-number);
            if (operation === '*') stack.push(stack.pop() * number);
            if (operation === '/') stack.push(~~(stack.pop() / number));
            operation = char;
            number = '';
        }
    }
    return stack.reduce((sum, num) => sum + num, 0);
};
