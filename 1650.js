/**
 * // Definition for a Node.
 * function Node(val) {
 *    this.val = val;
 *    this.left = null;
 *    this.right = null;
 *    this.parent = null;
 * };
 */

const getDepth = function(node) {
    let depth = 0;
    while (node) {
        depth++;
        node = node.parent
    }
    return depth;
}

/**
 * @param {Node} node
 * @return {Node}
 */
var lowestCommonAncestor = function(p, q) {
    let pDepth = getDepth(p);
    let qDepth = getDepth(q);
    while (p && q) {
        if (p === q) return p;
        if (pDepth > qDepth) {
            p = p.parent;
            pDepth--;
        } else {
            q = q.parent;
            qDepth--;
        }
    }
    return null;
};
