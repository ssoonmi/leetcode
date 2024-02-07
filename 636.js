/*
Input: n = 2, logs = ["0:start:0","1:start:2","1:end:5","0:end:6"]
Output: [3,4]
0: 0 - 1 (+1) then 6 - 6 (+1)
1: 2 - 5 (+1)
*/

/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function(n, logs) {
    const stack = [];
    const res = [];
    let prevTime = 0;
    for (let i = 0; i < logs.length; i++) {
        let [id, tag, time] = logs[i].split(':');
        time = parseInt(time);
        if (!res[id]) res[id] = 0;
        if (tag === 'start') {
            if (stack.length) {
                res[stack[stack.length - 1]] += time - prevTime;
            }
            stack.push(id);
            prevTime = time;
        } else {
            stack.pop();
            res[id] += time - prevTime + 1;
            prevTime = time + 1;
        }
    }
    return res;
};
