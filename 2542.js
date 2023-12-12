class Heap {
    constructor(isMin = true) {
        this.isMin = isMin;
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    peek() {
        return this.heap[0];
    }

    pop() {
        const value = this.heap[0];
        const bubbleValue = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = bubbleValue;
            this.bubbleDown();
        }
        return value;
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx >= 0) {
            let lastAdded = this.heap[idx];
            let parentIdx = Math.floor((idx - 1) / 2);
            let parentVal = parentIdx >= 0 ? this.heap[parentIdx] : 0;
            if (
                (this.isMin && lastAdded < parentVal) ||
                (!this.isMin && lastAdded > parentVal)
            ) {
                [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            }
            idx = parentIdx;
        }
    }

    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            let lastValue = this.heap[idx];
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let swapIdx;
            if (leftChildIdx < this.heap.length) {
                if (
                    (this.isMin && lastValue > this.heap[leftChildIdx]) ||
                    (!this.isMin && lastValue < this.heap[leftChildIdx])
                ) {
                    swapIdx = leftChildIdx;
                }
            }
            if (rightChildIdx < this.heap.length) {
                let otherIdx = swapIdx ? swapIdx : idx;
                if (
                    (this.isMin && this.heap[otherIdx] > this.heap[rightChildIdx]) ||
                    (!this.isMin && this.heap[otherIdx] < this.heap[rightChildIdx])
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
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    const heap = new Heap();
    let totalSum = 0;
    let maxProduct = 0;
    const indexes = nums1.map((_val, i) => i);
    indexes.sort((a, b) => nums2[b] - nums2[a]);
    for (const idx of indexes) {
        const num1 = nums1[idx];
        const num2 = nums2[idx];
        // console.log(num1, num2, totalSum);
        if (heap.size() === k) {
            totalSum -= heap.pop();
        }
        totalSum += num1;
        heap.push(num1);
        // console.log(heap);
        if (heap.size() === k) {
            maxProduct = Math.max(maxProduct, totalSum * num2);
        }
    }
    return maxProduct;
};
