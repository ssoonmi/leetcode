const canReachCityB = function (cityA, cityB, graph, directedGraph, visited, visiting = new Set()) {
    if (visited.has(cityA)) return 0;
    if (cityA === cityB) return 0;
    visiting.add(cityA);
    if (!(cityA in graph)) return 0;
    let numChanges = 0;
    for (const neighbor of graph[cityA]) {
        if (visiting.has(neighbor)) continue;
        if (neighbor === cityB) {
            visited.add(cityA);
            return 0;
        }
        const originalChanges = numChanges;
        numChanges += canReachCityB(neighbor, cityB, graph, directedGraph, visited, visiting);
        if (numChanges !== originalChanges) visited.add(cityA);
        else if (directedGraph) {
            if (!(cityA in directedGraph)) directedGraph[cityA] = [];
            directedGraph[cityA].push(cityB);
            visited.add(cityA);
            numChanges++;
        }
    }
    visiting.delete(cityA);
    return numChanges;
}

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var minReorder = function(n, connections) {
    let numChanges = 0;
    const directed = {};
    const reverseDirected = {};
    const visited = new Set();
    for (const [a, b] of connections) {
        if (b === 0) visited.add(a);
        if (!(a in directed)) directed[a] = [];
        directed[a].push(b);
        if (!(b in reverseDirected)) reverseDirected[b] = [];
        reverseDirected[b].push(a);
    }
    while (visited.size !== n - 1) {
        console.log(visited)
        console.log(directed)
        console.log(numChanges)
        for (let a = 1; a < n; a++) {
            if (visited.has(a)) continue;
            if (canReachCityB(a, 0, directed, null, visited)) continue;
            numChanges += canReachCityB(a, 0, reverseDirected, directed, visited);
        }
    }
    return numChanges;
};
