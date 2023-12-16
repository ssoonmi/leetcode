/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // constant space
    // single character without number
    // multiple character followed by number
    let lastChar = chars[0];
    let num = 1;
    let length = 0;
    for (let i = 1; i <= chars.length; i++) {
        const currentChar = chars[i];
        if (currentChar !== lastChar) {
            if (num === 1) {
                chars[length] = lastChar;
                length++;
            } else {
                chars[length] = lastChar;
                const nums = num.toString();
                let j = 0;
                while (j < nums.length) {
                    chars[length + 1 + j] = nums[j];
                    j++;
                }
                length += 1 + nums.length;
            }
            num = 1;
            lastChar = currentChar;
        } else {
            num += 1;
        }
    }
    chars.length = length;
    return length;
};
