/*
7:45pm - 7:52pm (7 min)

inputs:
given a reference of a node in a connected UNDIRECTED graph
output:
return a deep copy (clone) of the graph

traverse through the graph (depth-first traversal)
set of original nodes that we are already traversing

Time complexity
O(n) where n is the number of nodes

Space complexity
O(n)
*/

/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node, created = new Map()) {
    if (!node) return node;
    if (created.has(node)) return created.get(node);
    const clone = new Node(node.val);
    created.set(node, clone);
    for (const neighbor of node.neighbors) {
        clone.neighbors.push(cloneGraph(neighbor, created));
    }
    return clone;
};
