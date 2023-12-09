/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee, i = 0, bought = false, memo = {}) {
    if (i >= prices.length) return 0;
    if (i in memo && bought in memo[i]) return memo[i][bought];
    if (!(i in memo)) memo[i] = {};
    memo[i][bought] = Math.max(
        bought ? (
            prices[i] - fee + maxProfit(prices, fee, i + 1, false, memo)
        ) : (
            maxProfit(prices, fee, i + 1, true, memo) - prices[i]
        ),
        maxProfit(prices, fee, i + 1, bought, memo),
    );
    return memo[i][bought];
};
