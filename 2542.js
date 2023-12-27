class MinHeap {
    constructor() {
        this.heap = [];
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
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx;
            if (
                leftChildIdx < this.heap.length &&
                this.heap[leftChildIdx] < this.heap[idx]
            ) {
                swapIdx = leftChildIdx;
            }
            if (
                rightChildIdx < this.heap.length &&
                (
                    (swapIdx && this.heap[rightChildIdx] < this.heap[swapIdx]) || 
                    (!swapIdx && this.heap[rightChildIdx] < this.heap[idx])
                ) 
            ) {
                swapIdx = rightChildIdx;
            }
            if (!swapIdx) break;
            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
            idx = swapIdx;
        }
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const idxs = nums2.map((_num, idx) => idx)
        .sort((a, b) => nums2[b] - nums2[a]);
    let sum = 0;
    let minHeapNum1 = new MinHeap();
    for (let i = 0; i < k; i++) {
        const num1 = nums1[idxs[i]];
        sum += num1;
        minHeapNum1.push(num1);
    }
    let maxProduct = nums2[idxs[k - 1]] * sum;
    for (let i = k; i < idxs.length; i++) {
        const num2 = nums2[idxs[i]];
        let num1 = nums1[idxs[i]];
        const removedNum1 = minHeapNum1.peek();
        if (num1 > removedNum1) {
            minHeapNum1.pop();
            sum -= removedNum1;
            sum += num1;
            minHeapNum1.push(num1);
        }
        maxProduct = Math.max(maxProduct, num2 * sum);
    }
    return maxProduct;
};
