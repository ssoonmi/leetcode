/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost, i = -1, memo = {}) {
    // O(n) time, O(n) space
    if (i in memo) return memo[i];
    if (i >= cost.length) return 0;
    cost[i] = (i === -1 ? 0 : cost[i]) + Math.min(
        minCostClimbingStairs(cost, i + 1, memo),
        minCostClimbingStairs(cost, i + 2, memo),
    );
    return memo[i];
    // O(n) time, O(1) space
    // for (let i = 2; i < cost.length; i++) {
    //   cost[i] = Math.min(cost[i - 1], cost[i - 2]) + cost[i];
    // }
    // return Math.min(cost[cost.length - 1], cost[cost.length - 2]);
};
