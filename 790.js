/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n, col = n, memo = {}) {
  // memoization:
  if (col === 1) return 1;
  if (col === 2) return 2;
  if (col === 3) return 5;
  if (col in memo) return memo[col];
  memo[col] = (2 * numTilings(n, col - 1, memo) + numTilings(n, col - 3, memo)) % (Math.pow(10, 9) + 7);
  return memo[col];

  // tabulation:
  // const table = [1, 2, 5];
  // let i = 3;
  // while(i < n) {
  //   table[i] = 2 * table[i - 1] + table[i - 3];
  //   table[i] %= (Math.pow(10, 9) + 7);
  //   i++;
  // }
  // return table[n - 1];
};


/*
0 1 2 3
d d d d
d d d d
x4

0 1 2 3
d t t t
d t t t
x2

0 1 2 3
t t t d
t t t d
x2

0 1 2 3
t d d t
t t t t
x2

0 1 2 3
d d d d
d d d d
x1


0 1 2 3 4
  t t d d
  t t d d
x2

0 1 2 3 4
  t d d t
  d d t t
x1

0 1 2 3 4
  t t t d
  d d t d
x1
*/
