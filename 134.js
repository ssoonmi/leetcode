/*
8:28pm-8:53pm

n gas stations in a circle
amount of gas at ith gas station is gas[i]
car with unlimited gas tank and it costs cost[i] of gas to travel from ith station to its next (i + 1)th station
you begin the journey with an empty tank at one of the gas stations

return the starting gas station's index if you can travel around the circuit once in the clockwise direction, otherwise return -1 (guaranteed to have a unique solution)

questions:
is the clockwise direction increasing index?

gas = [1,2,3,4,5], cost = [3,4,5,1,2]
       0 1 2 3 4           0 1 2 3 4
      [3,4,5,1,2]
       7 6 5 4 8
      -2-2-2 3 3

      -2 1-1-2 1 3

output = 3

*/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let res = 0;
    let gasLeft = -Infinity;
    let totalCost = 0;
    let totalGas = 0;
    for (let i = 0; i < gas.length; i++) {
        const diff = gas[i] - cost[i];
        totalCost += cost[i];
        totalGas += gas[i];
        if (gasLeft < 0 && diff > 0) {
            res = i;
            gasLeft = diff;
        } else {
            gasLeft += diff;
        }
    }
    return totalGas < totalCost ? -1 : res;
};
