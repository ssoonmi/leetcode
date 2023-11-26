/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [{ str: '' }];
    let numStr = '';
    let i = 0;
    while (i < s.length) {
        if (s[i] === '[') {
            stack[stack.length - 1].num = Number(numStr);
            numStr = '';
        } else if (s[i] === ']') {
            const { num, str } = stack.pop();
            stack[stack.length - 1].str += str.repeat(num);
        } else if (!isNaN(s[i])) {
            if (!numStr) stack.push({ str: '' });
            numStr += s[i];
        } else if (isNaN(s[i])) {
            stack[stack.length - 1].str += s[i];
        }
        i++;
    }
    return stack[0].str;
};
