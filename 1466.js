const dfs = (graph, a, visited) => {
    let numReorders = 0;
    for (const neighbor in graph[a]) {
        if (visited.has(neighbor)) continue;
        if (!graph[neighbor][a]) numReorders++;
        visited.add(neighbor);
        numReorders += dfs(graph, neighbor, visited);
    }
    return numReorders;
};

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    const graph = {};
    for (let [a, b] of connections) {
        a = a.toString();
        b = b.toString();
        if (!(a in graph)) graph[a] = {};
        if (!(b in graph)) graph[b] = {};
        graph[a][b] = true;
        graph[b][a] = false;
    }

    const visited = new Set();
    visited.add('0');
    let numReorders = 0;
    const queue = ['0'];
    while (queue.length) {
        const city = queue.shift();
        for (const neighbor in graph[city]) {
            if (visited.has(neighbor)) continue;
            if (!graph[neighbor][city]) numReorders++;
            visited.add(neighbor);
            queue.push(neighbor);
        }
    }
    return numReorders;
    // return dfs(graph, '0', visited);
};
