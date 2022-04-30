const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = ""
  if (options.separator === undefined) {
    options.separator = "+"
  }
  if (options.additionSeparator === undefined) {
    options.additionSeparator = "|"
  }
  if (options.repeatTimes === undefined) {
    if (options.addition !== undefined) {
      string += String(str) + String(options.addition);
    }
    else { string += String(str) }
  }
  for (let i = 0; i < options.repeatTimes; i++) {
    if (options.addition === undefined) {
      string += String(str)
      if ((i !== options.repeatTimes - 1))
        string += options.separator;
    }
    else {
      string += String(str) + String(options.addition);
      for (let p = 1; p < options.additionRepeatTimes; p++) {
        string += options.additionSeparator + String(options.addition)
      }
      if ((i !== options.repeatTimes - 1))
        string += options.separator;
    }
  }
  return string
}

module.exports = {
  repeater
};
