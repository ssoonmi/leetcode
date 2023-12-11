/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    if (!temperatures.length) return [];
    const res = [];
    res[temperatures.length - 1] = 0;
    const stack = [temperatures.length - 1];
    for (let i = temperatures.length - 2; i >= 0; i--) {
        const temp = temperatures[i];
        let latestTempI = stack[stack.length - 1];
        let numDays = 0;
        while (stack.length && temp >= temperatures[latestTempI]) {
            stack.pop();
            latestTempI = stack[stack.length - 1];
        }
        if (stack.length) numDays = latestTempI - i;
        stack.push(i);
        res[i] = numDays;
    }
    return res;
};
