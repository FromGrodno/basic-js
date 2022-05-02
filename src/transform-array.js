const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error('\'arr\' parameter must be an instance of the Array!')
  }
  let arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "--discard-next") {
      if (arr[arr.length - 1] == "--discard-next") {
        return arr1
      }
      i++;
    }
    if (arr[i] == "--discard-prev") {
      if (arr[0] == "--discard-prev") {
        continue
      }
      arr1.pop()
    }
    if (arr[i] == "--double-next") {
      if (arr[arr.length - 1] === "--double-next") {
        return arr1
      }
      arr1.push(arr[i + 1])
    }
    if (arr[i] == "--double-prev") {
      if (arr[0] == "--double-prev") {
        continue
      }
      arr1.push(arr[i - 1])
    }
    else {
      arr1.push(arr[i])
    }
  }
  return arr1
}

module.exports = {
  transform
};
