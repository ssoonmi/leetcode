/*
10:30am-2pm (incomplete)
nums containing n + 1 integers where each integer is between 1 and n (inclusive)
only one repeated number -> return this repeated number

detecting a linked cycle using tortoise and hare
[1, 3, 4, 2, 2]
             s
             f

start the fast and slow pointers at the first element in the array
change the slow pointer to be at the index corresponding to the value of the element that it's on
change the fast pointer to do the same operation as the slow pointer except do the two of the operations
if the slow pointer meets up with the fast pointer at a specific index, then return that value at that index

O(n) time complexity
O(1) space complexity

[2,5,9,6,9,3,8,9,7,1]
   s
   f
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let fast = 0;
    let slow = 0;
    while (slow === 0 || slow !== fast) {
        slow = nums[slow];
        fast = nums[fast];
        fast = nums[fast];
    }
    let slow2 = 0;
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }
    return slow;
};

// 1 3 4 2 2
//     s
//     s
