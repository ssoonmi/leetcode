/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = [];
    let str = '';
    let num = '';
    for (const char of s) {
        if (!isNaN(char)) {
            num += char;
        } else if (char === '[') {
            stack.push(str);
            stack.push(Number(num));
            str = '';
            num = '';
        } else if (char !== ']') {
            str += char;
        } else {
            const num = stack.pop();
            const prevStr = stack.pop();
            str = prevStr + str.repeat(num);
        }
    }
    return str;
};
