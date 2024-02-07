/*
8:28pm-8:45pm

Input: x = 2.00000, n = 10
Output: 1024.00000

x^n
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (n === 0) return 1;
    const sign = n > 0;
    n = Math.abs(n);
    let product = 1;
    if (n % 2 === 0) {
        const halfPower = myPow(x, n / 2);
        product *= halfPower * halfPower;
    } else {
        product *= x * myPow(x, n - 1);
    }
    return sign ? product : 1 / product;
};
