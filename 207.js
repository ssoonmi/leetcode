/*
10:27pm-10:44pm (17 min)

numCourses(n) 0 to n - 1
prerequisites[i] = [a, b] you must take b first if you want to take course a
return true if you can finish all courses, otherwise return false

valid:
[[3, 1], [2, 1], [3, 2]]
    1 -> 3
    1 -> 2 -> 3

invalid:
[[3, 1], [2, 3], [1, 2]]
    2 -> 1 -> 3
        <----

when there is a cycle in the directional graph, then return false

make an adjacency list from the prerequisites
do a depth first search through each node in the adjacency list to see if we can find a cycle, if there's a cycle return false, otherwise return true
*/


/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const adjList = {};
    for (const prereq of prerequisites) {
        const [a, b] = prereq;
        if (!(b in adjList)) adjList[b] = [];
        adjList[b].push(a);
    }
    const visited = new Set();
    function dfs(node, visiting = new Set()) {
        if (visited.has(node)) return true;
        if (visiting.has(node)) return false;
        if (!(node in adjList)) return true;
        visiting.add(node);
        for (const neighbor of adjList[node]) {
            if (!dfs(neighbor, visiting)) return false;
        }
        visiting.delete(node);
        visited.add(node);
        return true;
    }
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }
    return true;
};
