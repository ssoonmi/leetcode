const traverse = function(graph, a, b, memo = {}, visiting = new Set()) {
    const key = `${a}-${b}`;
    if (key in memo) return memo[key];
    let resValue = null;
    for (const neighbor of graph[a]) {
        const [c, value] = neighbor;
        if (c === b) {
            resValue = value;
            memo[key] = resValue;
            return resValue;
        }
    }
    if (visiting.has(a)) {
        memo[key] = resValue;
        return resValue;
    }
    visiting.add(a);
    for (const neighbor of graph[a]) {
        const [c, value] = neighbor;
        resValue = traverse(graph, c, b, memo, visiting);
        if (resValue !== null) {
            resValue *= value;
            memo[key] = resValue;
            return resValue;
        }
    }
    visiting.delete(a);
    return resValue;
}

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    for (const idx in equations) {
        const [a, b] = equations[idx];
        const value = values[idx];
        if (!(a in graph)) graph[a] = [];
        if (!(b in graph)) graph[b] = [];
        graph[a].push([b, value]);
        graph[b].push([a, 1 / value]);
    }
    const res = [];
    const memo = {};
    for (const query of queries) {
        const [a, b] = query;
        if (a === b && (a in graph || b in graph)) {
            res.push(1);
            continue;
        }
        if (!(a in graph && b in graph)) {
            res.push(-1);
            continue;
        }
        const resValue = traverse(graph, a, b, memo);
        if (resValue === null) res.push(-1);
        else res.push(resValue);
    }
    return res;
};
