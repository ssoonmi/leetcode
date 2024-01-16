/*
9:15pm - 10:15pm (unfinished)
input: two sorted arrays nums1 and nums2 of size m and n
output: return median of the two sorted arrays

questions:
will the numbers in num1 be strictly less than the values in num2? no
will the first value in num1 be less than the first value in num2? no

questions I didn't ask:
can there be duplicate numbers in the arrays? yes
is num1 going to have the same length as num2? not necessarily
will num1 have a length that will always be greater than or equal to num2? no

example:
num1 = [1, 3, 5, 6, 8]
              i  m  j
num2 = [4, 7, 10]
        s,t
        m

[1, 3, 4, 5, 6, 7, 8, 10]
median = (5 + 6) / 2 = 5.5

num1 = [1, 3]
num2 = [4]

1 is less than 4 and 3 is less than 4 => 3 is the median

num1 = [1, 3]
num2 = [2]
1 is less than 2 and 3 is greater than 2 => 2 is the median

num1 = [1, 3, 4]
num2 = [2, 4]
1 is less than 4 and 4 is equal to 4 => median can be in either num1 or num2
change left pointer to exclude 

I know for sure that by examining 3 and 2 that 3 is going to be greater than or equal to AT LEAST 2 numbers, so I need to check the right side of the num2 array to see if there are any numbers that are less than 3

if there are any numbers less than 3 on the right side, then 3 is not the median

O(log (m + n)) where m is the length of num1 and n is the length of num2
O(1) space complexity
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let a = nums1;
    let b = nums2;
    let i = 0;
    let j = a.length - 1;
    const targetMid = Math.ceil((a.length + b.length) / 2);
    const totalLength = a.length + b.length;
    while (true) {
        const mid1 = Math.floor((i + j) / 2);
        const mid2 = targetMid - mid1 - 2;
        const left1 = mid1 in a ? a[mid1] : -Infinity;
        const left2 = mid2 in b ? b[mid2] : -Infinity;
        const right1 = mid1 + 1 in a ? a[mid1 + 1] : Infinity;
        const right2 = mid2 + 1 in b ? b[mid2 + 1] : Infinity;
        if (mid2 >= b.length) i = mid1 + 1;
        else if (mid2 < -1) j = mid1 - 1;
        else if (left1 <= right2 && left2 <= right1) {
            if (totalLength % 2 === 0) {
                return (
                    Math.max(left1, left2) +
                    Math.min(right1, right2)
                ) / 2;
            }
            return Math.max(left1, left2);
        } else if (left1 <= right2 && left2 > right1) {
            i = mid1 + 1;
        } else {
            j = mid1 - 1;
        }
    }
};
