class MinHeap {
    constructor() {
        this.heap = [];
    }

    size() {
        return this.heap.length;
    }

    push(val) {
        this.heap.push(val);
        return this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.heap.length - 1;
        while (idx > 0) {
            const lastAdded = this.heap[idx];
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.heap[parentIdx];
            if (lastAdded > parent) break;
            [this.heap[idx], this.heap[parentIdx]] = [parent, lastAdded];
            idx = parentIdx;
        }
        return idx;
    }

    peek() {
        return this.heap[0];
    }

    pop() {
        const min = this.heap[0];
        const lastAdded = this.heap.pop();
        if (this.heap.length) {
            this.heap[0] = lastAdded;
            this.bubbleDown();
        }
        return min;
    }

    bubbleDown() {
        let idx = 0;
        while (idx < this.heap.length) {
            const lastAdded = this.heap[idx];
            const leftChildIdx = 2 * idx + 1;
            const rightChildIdx = 2 * idx + 2;
            let swapIdx = null;
            if (leftChildIdx < this.heap.length) {
                if (this.heap[leftChildIdx] < lastAdded) swapIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length) {
                if (
                    (swapIdx && this.heap[rightChildIdx] < this.heap[swapIdx]) ||
                    (!swapIdx && this.heap[rightChildIdx] < lastAdded)
                ) {
                    swapIdx = rightChildIdx;
                }
            }
            if (!swapIdx) break;
            [this.heap[idx], this.heap[swapIdx]] = [this.heap[swapIdx], this.heap[idx]];
        }
    }
}


var SmallestInfiniteSet = function() {
    this.heap = new MinHeap();
    this.addedBack = new Set();
    this.minNum = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    // console.log(this.heap);
    if (this.heap.size()) {
        const smallest = this.heap.pop();
        this.addedBack.delete(smallest);
        return smallest;
    } else {
        const smallest = this.minNum;
        this.minNum++;
        return smallest;
    }
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    if (num < this.minNum && !this.addedBack.has(num)) {
        this.heap.push(num);
        this.addedBack.add(num);
    }
    return null;
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
