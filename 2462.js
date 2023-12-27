class MinHeap {
    constructor() {
        this.heap = [];
    }
    size() {
        return this.heap.length;
    }
    peek() {
        return this.heap[0];
    }
    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }
    pop() {
        const val = this.heap[0];
        const ele = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = ele;
            this.bubbleDown();
        }
        return val;
    }
    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx >= 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[idx] < this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]];
                idx = parentIdx;
            } else break;
        }
    }
    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx;
            if (
                leftIdx < this.heap.length &&
                this.heap[leftIdx] < this.heap[idx]
            ) {
                swapIdx = leftIdx;
            }
            if (
                rightIdx < this.heap.length && (
                    (swapIdx && this.heap[rightIdx] < this.heap[swapIdx]) ||
                    (!swapIdx && this.heap[rightIdx] < this.heap[idx])
                )
            ) {
                swapIdx = rightIdx;
            }
            if (!swapIdx) break;
            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
            idx = swapIdx;
        }
    }
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    let leftCandidates = new MinHeap();
    let rightCandidates = new MinHeap();
    let i = 0;
    let j = costs.length - 1;
    while (i <= j && i < candidates) {
        leftCandidates.push(costs[i])
        if (i !== j) {
            rightCandidates.push(costs[j]);
        }
        i++;
        j--;
    }
    let totalCost = 0;
    while (k) {
        if (leftCandidates.size() && (!rightCandidates.size() || leftCandidates.peek() <= rightCandidates.peek())) {
            totalCost += leftCandidates.pop();
            if (i <= j) {
                leftCandidates.push(costs[i]);
                i++;
            }
        } else if (rightCandidates.size() && (!leftCandidates.size() || rightCandidates.peek() < leftCandidates.peek())) {
            totalCost += rightCandidates.pop();
            if (i <= j) {
                rightCandidates.push(costs[j]);
                j--;
            }
        }
        k--;
    }
    return totalCost;
};
