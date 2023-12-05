const calcValue = function(graph, a, b, visited = new Set()) {
    if (!(a in graph) || !(b in graph)) return -1;
    if (visited.has(a)) return -1;
    visited.add(a);
    if (a in graph && b in graph[a]) return graph[a][b];
    for (const c in graph[a]) {
        let value = calcValue(graph, c, b, visited);
        if (value !== -1) {
            value = value * graph[a][c];
            graph[a][b] = value;
            graph[b][a] = 1 / value;
            return value;
        }
    }
    return -1;
};

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    const graph = {};
    for (const i in equations) {
        const value = values[i];
        const [a, b] = equations[i];
        if (!(a in graph)) graph[a] = {};
        if (!(b in graph)) graph[b] = {};
        graph[a][b] = value;
        graph[b][a] = 1 / value;
    }

    const res = [];
    for (const i in queries) {
        const [a, b] = queries[i];
        res.push(calcValue(graph, a, b));
    }
    return res;
};
