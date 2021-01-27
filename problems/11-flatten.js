/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here

function flatten (array) {
  debugger
  let newArray = [];

  array.forEach((element, i) => {
    if (Array.isArray(element)) {
      newArray.push(...flatten(element));
    } else {
      newArray.push(element);
    }
  });
  return newArray;
}

// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]

console.log(flatten([
  [1, 2],
  [3, [4, 5]],
]));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
