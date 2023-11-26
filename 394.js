/*
3[a]2[bc] // 3[a], 2[bc]
3[a2[c]] // 3[a, 2[c]]
2[abc]3[cd]ef // 2[abc], 3[cd], ef
*/


/**
 * @param {string} s
 * @return {string}
 */
const decodeString = function(s, i = 0, j = s.length) {
    let res = ''
    let numStr = ''
    const stack = []
    while (i < j) {
        if (s[i] === '[') {
            let k = i + 1
            stack.push(i)
            while (stack.length) {
                if (s[k] === '[') stack.push(k)
                if (s[k] === ']') stack.pop()
                k++
            }
            const nestedStr = decodeString(s, i + 1, k)
            i = k - 1
            const num = Number(numStr)
            numStr = ''
            res += nestedStr.repeat(num)
        } else if (s[i] === ']') {
        } else if (isNaN(s[i])) {
            res += s[i]
        } else {
            numStr += s[i]
        }
        i++
    }
    return res
};
