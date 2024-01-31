/*
9:52pm-2:51pm
inputs:
2D integer array intervals
intervals[i] = [left, right]
size = right - left + 1
queries[j] = size of the smallest interval i
return an array containing the answers to the queries

intervals = [[1,4],[2,4],[3,6],[4,4]]
queries = [2,3,4,5]
output = [3,3,1,4]

worst case:
time complexity:
O(q * n) n where n is the number of intervals and q is the number of queries
space complexity:
O(1)

best case:
time complexity:
O(nlogn + qlogq) where n is the num of intervals and q is the num of queries
space complexity:
O(q + n)
*/

class MinHeap {
    constructor() {
        this.heap = [];
    }
    peek() {
        return this.heap[0];
    }
    size() {
        return this.heap.length;
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const [a, b] = this.heap[idx];
            const parentIdx = Math.floor((idx - 1) / 2);
            const [c, d] = this.heap[parentIdx];
            if ((a === c && b >= d) || a >= c) return;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }
    pop() {
        if (!this.heap.length) return;
        const first = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = last;
            this.bubbleDown();
        }
        return first;
    }
    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            const [a, b] = this.heap[idx];
            let swapIdx;
            if (leftChildIdx in this.heap) {
                const [c, d] = this.heap[leftChildIdx];
                if (c < a || (a === c && d < b)) {
                    swapIdx = leftChildIdx;
                }
            }
            if (rightChildIdx in this.heap) {
                const [e, f] = this.heap[rightChildIdx];
                if (swapIdx) {
                    const [c, d] = this.heap[leftChildIdx];
                    if (e < c || (e === c && f < d)) {
                        swapIdx = rightChildIdx;
                    }
                } else if (e < a || (a === e && f < b)) {
                    swapIdx = rightChildIdx;
                }
            }
            if (!swapIdx) return;
            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
            idx = swapIdx;
        }
    }
}


/**
 * @param {number[][]} intervals
 * @param {number[]} queries
 * @return {number[]}
 */
var minInterval = function(intervals, queries) {
    const minHeap = new MinHeap();
    intervals.sort((a, b) => a[0] - b[0]);
    const queryIdxs = queries
        .map((_, i) => i)
        .sort((a, b) => queries[a] - queries[b]);
    const output = [];
    let i = 0;
    for(let j = 0; j < queryIdxs.length; j++) {
        const queryIdx = queryIdxs[j];
        const query = queries[queryIdx];
        while (i < intervals.length && !(intervals[i][0] > query)) {
            const [start, end] = intervals[i];
            minHeap.push([end - start + 1, end]);
            i++;
        }
        while (minHeap.size() && minHeap.peek()[1] < query) {
            minHeap.pop();
        }
        output[queryIdx] = minHeap.size() ? minHeap.peek()[0] : -1;
    }
    return output;
};
