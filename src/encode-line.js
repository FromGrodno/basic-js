const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = str.split("")
  let massiv = [];
  while (arr.length > 0) {
     let count = 1;
     for (let i = 1; i < arr.length; i++) {
        if (arr[0] == arr[i] && arr[0] == arr[1]) {
           count++
        }
     }
     if (count > 1) {
        massiv.push(count)
        massiv.push(arr[0])
     }
     if (count == 1) {
        massiv.push(arr[0])
     }
     arr.splice(0, count)
     console.log(arr)
  }
  return massiv.join("")  
}

module.exports = {
  encodeLine
};
