/*
nestedList
integer or a list whose elements may also be integers or other lists
depth of an integer is the number of lists that it is inside of
[1, [2, 2], [[3], 2], 1]

return the sum of each integer in nestedList multiplied by its depth

nestedList = [[1,1],2,[1,1]]
10
4 1's at depth 2, one 2 at depth 1 = 2*4 + 2*1 = 10

recursion to determine depth and then sum them all up and multiply sum by the
depth and return it
*/

/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSum = function(nestedList, depth = 1) {
    let sum = 0;
    let total = 0;
    for (const list of nestedList) {
        if (list.isInteger()) sum += list.getInteger();
        else total += depthSum(list.getList(), depth + 1);
    }
    return total + sum * depth;
};
