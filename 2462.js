class MinHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        if (!this.heap.length) return null;
        const val = this.heap[0];
        const bubbleVal = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = bubbleVal;
            this.bubbleDown();
        }
        return val;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx >= 0) {
            const lastAdded = this.heap[idx];
            const parentIdx = Math.floor((idx - 1) / 2);
            const parentVal = this.heap[parentIdx];
            if (lastAdded < parentVal) {
                [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            }
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            const bubbleVal = this.heap[idx];
            const lChildIdx = 2 * idx + 1;
            const rChildIdx = 2 * idx + 2;
            let swapIdx;
            if (
                lChildIdx < this.heap.length &&
                bubbleVal > this.heap[lChildIdx]
            ) {
                swapIdx = lChildIdx;
            }
            if (
                rChildIdx < this.heap.length &&
                bubbleVal > this.heap[rChildIdx] &&
                this.heap[lChildIdx] > this.heap[rChildIdx]
            ) {
                swapIdx = rChildIdx;
            }
            if (!swapIdx) break;
            [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];
            idx = swapIdx;
        }
    }

    peek() {
        return this.heap[0];
    }
}

/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
var totalCost = function(costs, k, candidates) {
    const leftHeap = new MinHeap();
    const rightHeap = new MinHeap();
    let i = 0;
    let j = costs.length - 1;
    while (i <= j && i < candidates) {
        leftHeap.push(costs[i]);
        if (i !== j) rightHeap.push(costs[j]);
        i++;
        j--;
    }
    let totalCost = 0;
    while (k > 0) {
        // leftHeap.sort((a, b) => a - b);
        // rightHeap.sort((a, b) => a - b);
        // console.log(leftHeap, rightHeap, i, j);
        if (!rightHeap.peek() && !leftHeap.peek()) break;
        if (!rightHeap.peek() || leftHeap.peek() <= rightHeap.peek()) {
            totalCost += leftHeap.pop();
            if (i <= j) {
                leftHeap.push(costs[i]);
                i++;
            }
        } else {
            totalCost += rightHeap.pop();
            if (j >= i) {
                rightHeap.push(costs[j]);
                j--;
            }
        }
        k--;
    }
    return totalCost;
};
