/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) { // [1,2,2,1,1]
    const occur = {} // {2:1,3:1}
    const count = {} // {1:3,2:2}
    let numCounts = 0 // 2
    let numNums = 0
    for (let num of arr) { // 1
        if (!(num in count)) {
            count[num] = 0
            numNums++
        }
        if (count[num] > 0) {
            occur[count[num]]--
            if (occur[count[num]] === 0) {
                delete occur[count[num]]
                numCounts--
            } else if (occur[count[num]] === 1) {
                numCounts++
            }
        }
        count[num]++
        if (!(count[num] in occur)) {
            occur[count[num]] = 0
            numCounts++
        } else if (occur[count[num]] === 1){
            numCounts--
        }
        occur[count[num]]++
    }
    return numCounts === numNums
};
