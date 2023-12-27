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
    pop() {
        const ele = this.heap[0];
        const poppedEle = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = poppedEle;
            this.bubbleDown();
        }
        return ele;
    }
    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            let leftChildIdx = idx * 2 + 1;
            let rightChildIdx = idx * 2 + 2;
            let swapIdx;
            if (
                leftChildIdx in this.heap &&
                this.heap[leftChildIdx] < this.heap[idx]
            ) {
                swapIdx = leftChildIdx;
            }
            if (
                rightChildIdx in this.heap
            ) {
                if (
                    (swapIdx && this.heap[rightChildIdx] < this.heap[swapIdx]) ||
                    (!swapIdx && this.heap[rightChildIdx] < this.heap[idx])
                ) {
                    swapIdx = rightChildIdx;

                }
            }
            if (!swapIdx) break;
            [this.heap[swapIdx], this.heap[idx]] = [this.heap[idx], this.heap[swapIdx]];
            idx = swapIdx;
        }
    }
}

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    const minHeap = new MinHeap();
    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }
    for (let i = k; i < nums.length; i++) {
        if (nums[i] > minHeap.peek()) {
            minHeap.pop();
            minHeap.push(nums[i]);
        }
    }
    return minHeap.peek();
};
