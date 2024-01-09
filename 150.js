/*
integer that represents the value of that expression

4 5 + 6 - => 4 + 5 - 6 => 9 - 6 => 3
3 4 × 5 6 × + => 3 x 4 + 5 x 6 => 12 + 30 => 42
3 4 x 5 3 - 6 x + => 12 + (2 x 6) => 24
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    if (tokens.length === 1) return tokens[0];
    const stack = [];
    let i = 0;
    while (i < tokens.length) {
        if (!isNaN(tokens[i])) {
            stack.push(Number(tokens[i]));
        } else {
            const num2 = stack.pop();
            const num1 = stack.pop();
            oper = tokens[i];
            if (oper === '*') {
                stack.push(num1 * num2);
            } else if (oper === '/') {
                const res = num1 / num2;
                if (res < 0) stack.push(Math.ceil(res));
                else stack.push(Math.floor(res));
            } else if (oper === '+') {
                stack.push(num1 + num2);
            } else {
                stack.push(num1 - num2);
            }
        }
        i++;
    }
    return stack[0];
};
