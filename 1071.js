/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let maxLength = Math.max(str1.length, str2.length);
    let prefix = Math.min(str1.length, str2.length) === str1.length ? str1 : str2;
    let prefixMaxLength = prefix.length;
    while (prefixMaxLength >= 1) {
        while (str1.length % prefixMaxLength !== 0 || str2.length % prefixMaxLength !== 0) {
            prefixMaxLength--;
        }
        let i = 0;
        while (i < maxLength) {
            if (
                (i >= str1.length || prefix[i % prefixMaxLength] === str1[i]) &&
                (i >= str2.length || prefix[i % prefixMaxLength] === str2[i])
            ) {
                i++;
            } else break;
            if (i === maxLength) return prefix.slice(0, prefixMaxLength);
        }
        prefixMaxLength--;
    }
    return '';
};
