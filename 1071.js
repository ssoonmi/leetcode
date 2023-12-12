/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) return '';
    if (str2.length === 0) return str1;
    if (str1.length === 0) return str2;
    return str2.substring(0, greatestCommonDenominator(str1.length, str2.length));
};


// algorithm to find the greatest common denominator:
const greatestCommonDenominator = (a, b) => {
    if (b === 0) return a;
    return greatestCommonDenominator(b, a % b);
};
