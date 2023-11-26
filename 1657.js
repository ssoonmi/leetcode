/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    function countChars (count, char) {
        if (!(char in count)) count[char] = 0
        count[char]++
        return count
    }
    const count1 = word1.split('').reduce(countChars, {})
    const count2 = word2.split('').reduce(countChars, {})
    for (let char in count1) {
        const count = count1[char]
        if (count2[char] === count) {
            delete count2[char]
            delete count1[char]
        }
    }
    const chars1 = Object.keys(count1)
    const chars2 = Object.keys(count2)
    if (chars1.length === 0 && chars2.length === 0) return true
    if (chars1.length !== chars2.length) return false
    for (let char in count1) {
        if (!(char in count2)) return false
    }
    const freq = Object.values(count1).reduce(countChars, {})
    for (let char in count2) {
        const count = count2[char]
        if (count in freq) {
            delete count
            freq[count]--
            if (freq[count] === 0) {
                delete freq[count]
            }
        }
    }
    return Object.keys(freq).length === 0
};
