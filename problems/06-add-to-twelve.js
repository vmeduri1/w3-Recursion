/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:

addToTwelve([1, 3, 4, 7, 5]); // true
addToTwelve([1, 3, 4, 7, 6]); // false
addToTwelve([1, 11, 4, 7, 6]); // true
addToTwelve([1, 12, 4, 7, 6]); // false
addToTwelve([1]); // false
***********************************************************************/

// your code here

function addToTwelve (nums) {
  if (nums[0] + nums[1] === 12) {
    return true;
  } else if (nums.length === 1) {
    return false;
  }
  return addToTwelve(nums.slice(1));
};

console.log(addToTwelve([1, 3, 4, 7, 5])); // true
console.log(addToTwelve([1, 3, 4, 7, 6])); // false
// addToTwelve([1, 11, 4, 7, 6]); // true
// addToTwelve([1, 12, 4, 7, 6]); // false
// addToTwelve([1]); // false

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
