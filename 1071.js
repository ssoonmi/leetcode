/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let maxStr = str1;
    let minStr = str2;
    if (maxStr.length < minStr.length) {
        minStr = str1;
        maxStr = str2;
    }
    if (minStr.length === maxStr.length) return minStr === maxStr ? minStr : '';
    let parts = minStr.length;
    while (parts > 0) {
        if (minStr.length % parts === 0 && maxStr.length % parts === 0) {
            let i = 0;
            let str = "";
            while (i < maxStr.length) {
                if (i < parts) str += minStr[i];
                if (i < minStr.length && minStr[i] !== str[i % parts]) break;
                if (maxStr[i] !== str[i % parts]) break;
                i++;
            }
            if (i === maxStr.length) return str;
        }
        parts--;
    }
    return "";
};
