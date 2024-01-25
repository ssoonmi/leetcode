/*
2:38pm-5:30pm
inputs:
tree is a UNDIRECTED graph that is connected and has no cycles
graph that starts as a tree with n nodes from 1 to n with one additional edge
the added edge has two different vertices chosen from 1 to n and was not an edge
that already existed
edges[i] = [a, b]

outputs:
an edge that can be removed so that the resulting graph is a tree of n nodes

the edge that makes a cycle must be removed

1 -> 2
  -> 3
2 <- 3
*/

/**
 * @param {number[][]} edges
 * @return {number[]}
 */
var findRedundantConnection = function(edges) {
    const parents = [];
    const rank = [];
    for (let i = 1; i <= edges.length; i++) {
        parents[i] = i;
        rank[i] = 1;
    }
    function findParent(node) {
        let parent = parents[node];
        while (parent !== parents[parent]) {
            parent = parents[parent];
        }
        return parent;
    }
    for (const edge of edges) {
        const [a, b] = edge;
        let parentA = findParent(a);
        let parentB = findParent(b);
        if (parentA === parentB) return edge;
        if (rank[parentA] >= rank[parentB]) {
            parents[parentB] = parentA;
            rank[parentA] += rank[parentB];
        } else {
            parents[parentA] = parentB;
            rank[parentB] += rank[parentA];
        }
    }
};
