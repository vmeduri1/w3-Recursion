/***********************************************************************
Examples:

let arr = [1, 2, 3];
let duped = deepDup(arr); // [1, 2, 3];
arr === duped // false

arr = [1, [2, [3]]];
duped = deepDup(arr); // [1, [2, [3]]]
arr === duped // false
arr[1] === duped[1] // false
arr[1][1] === duped[1][1] // false
***********************************************************************/

// your code here

const deepDup = (arr) => {
  let copy = [];
  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      copy.push(deepDup(ele));
    } else {
      copy.push(ele);
    }
  });

  return copy;
};
let arr = [1, [2], 3];
let duped = deepDup(arr); // [1, 2, 3];
console.log(duped);
console.log(arr[1] === duped[1]); // false
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = deepDup;
} catch (e) {
  module.exports = null;
}
