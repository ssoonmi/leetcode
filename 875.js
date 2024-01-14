/*
6:30pm - 6:50pm
n piles of bananas
ith pile has piles[i] number of bananas
h hours
k bananas-per-hour eating speed
k bananas from a single pile each hour
if the pile has less than k bananas, eat all of them in the hour and will not move onto another pile
minimum k that she can eat all bananas within h hours

questions:
do all the piles have a positive number of bananas?
will h be an integer value?
is there a specific order to the piles of bananas?

question I should have asked:
will h always be greater or equal to the length of piles? yes
can h be equal to zero? no
can the length of the piles equal 0? no
can there be an empty number of piles? no

example:
piles = 3   4   9   2   3
hours = 11

speed = 2 => 12 hours total
speed = 3 => 8 hours total
speed = 4 => 7 hours total
speed = 5 => 6 hours total

binary search:
maximum speed (right boundary) = the pile with the most amount of bananas
minimum speed (left boundary) = 1
do a comparison between the target value of h and the mid value:
    mid value is going to be the total number of hours that koko takes to eat all the bananas

O(n logn) time complexity where n is equal to the length of the piles
O(1) space complexity

example:
piles: 4   5   6
hours: 15
speed => 1
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    let i = 1;
    let j = 1;
    for (const pile of piles) {
        j = Math.max(j, pile);
    }
    while (i <= j) {
        const speed = Math.floor((i + j) / 2);
        const hours = piles.reduce((sum, bananas) => {
            return sum + Math.ceil(bananas / speed);
        }, 0);
        if (hours <= h) {
            j = speed - 1;
        } else {
            i = speed + 1;
        }
    }
    return i;
};
