/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n, min = 1) {
    if (min > 9) return [];
    if (n < 1) return [];
    if (k === 1 && min === n) {
        return [[min]];
    }
    if (k <= 0) return [];
    let resCombos = [];
    const combos = combinationSum3(k - 1, n - min, min + 1);
    for (const combo of combos) {
        resCombos.push(combo.concat(min));
    }
    resCombos = resCombos.concat(combinationSum3(k, n, min + 1))
    return resCombos;
};
