/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // linear time complexity
    // linear space complexity
    const set = new Set(nums);
    let maxLength = 0;
    for (const num of nums) {
        if (!set.has(num + 1)) {
            let length = 1;
            while (set.has(num - length)) {
                length++;
            }
            maxLength = Math.max(maxLength, length);
        }
    }
    return maxLength;

    // linear time complexity
    // linear space complexity
    // const set = new Set(nums);
    // let maxLength = 0;
    // for (const num of nums) {
    //     if (!set.has(num)) continue;
    //     let prevLength = 1;
    //     let nextLength = 1;
    //     let length = 1;
    //     while (set.has(num - prevLength)) {
    //         set.delete(num - prevLength);
    //         length++;
    //         prevLength++;
    //     }
    //     while (set.has(num + nextLength)) {
    //         set.delete(num + nextLength);
    //         length++;
    //         nextLength++;
    //     }
    //     maxLength = Math.max(maxLength, length);
    // }
    // return maxLength;

    // linear time complexity
    // linear space complexity
    // let maxSequence = 0;
    // const seqs = {};
    // for (const num of nums) {
    //     if (num in seqs) continue;
    //     let previousSequence = 0, nextSequence = 0;
    //     if (num - 1 in seqs) {
    //         previousSequence = seqs[num - 1];
    //     }
    //     if (num + 1 in seqs) {
    //         nextSequence = seqs[num + 1];
    //     }
    //     const sequence = previousSequence + nextSequence + 1;
    //     if (num - 1 in seqs) seqs[num - previousSequence] = sequence;
    //     if (num + 1 in seqs) seqs[num + nextSequence] = sequence;
    //     seqs[num] = sequence;
    //     maxSequence = Math.max(sequence, maxSequence);
    // }
    // return maxSequence;
};
