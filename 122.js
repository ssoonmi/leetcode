/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let profit = 0;
    let prevPrice = prices[0];
    for (const price of prices) {
        if (prevPrice < price) {
            profit += price - prevPrice;
        }
        prevPrice = price;
    }
    return profit;
};
