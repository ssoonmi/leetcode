/*
1:25pm (stop at 1:33pm - 1:50pm) 2:01pm (36min - 17min = 19min)
inputs:
string s
output:
return all partitions of s where every substring of the partition is a palindrome

racecar
[r,a,c,e],[r,a,cec,a,r],[r,aceca,r],[racecar]
                            r
                        /        \ 
    (partition at r)  r,acecar   racecar (take r)

abceecba
[a,b,c,e,e,c,b,a],[a,b,c,ee,c,b,a],[a,b,ceec,b,a],[a,bceecb,a][abceecba]

time complexity:
O(n*2^n)
space complexity:
O(n^2)
*/

function isPalindrome(s, i, j) {
    while (i < j) {
        if (s[i] !== s[j]) return false;
        i++;
        j--;
    }
    return true;
}

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = [];
    function backtrack(i, j, parts) {
        if (j >= s.length) {
            if (i < j && isPalindrome(s, i, j - 1)) {
                res.push([...parts, s.slice(i, j)]);
            }
            return;
        }
        // take => increment j
        backtrack(i, j + 1, parts);
        if (isPalindrome(s, i, j)) {
            // not take => make i and j equal to j + 1
            backtrack(j + 1, j + 1, [...parts, s.slice(i, j + 1)]);
        }
    }
    backtrack(0, 0, []);
    return res;
};
