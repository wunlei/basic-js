const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = str + '';
  let addition;
  let arr = [];
  let repeatTimes;
  let separator;
  let additionSeparator;
  let additionRepeatTimes;


  if (options['addition'] !== undefined) {
    addition = options['addition'] + '';
  }

  if (!options['repeatTimes']) {
    repeatTimes = 1;
  } else { repeatTimes = options['repeatTimes']; }

  if (!options['separator']) {
    separator = '+';
  } else { separator = options['separator']; }

  if (!options['additionSeparator']) {
    additionSeparator = '|';
  } else { additionSeparator = options['additionSeparator'] + ''; }

  if (!options['additionRepeatTimes']) {
    additionRepeatTimes = 1;
  } else {additionRepeatTimes = options['additionRepeatTimes']; }


  let addSeparator = [];

  if (addition !== undefined) {
      for (let i = 0; i < additionRepeatTimes; i++) {
        addSeparator.push(addition);
      }
      addSeparator = addSeparator.join(additionSeparator);
    }
  


  for (let i = 0; i < repeatTimes; i++) {
    arr.push(str);
  }

  let arr2 = arr;


    if (addSeparator.length > 0) {
      arr2 = arr.map(function (arrVal) {
        return arrVal + addSeparator;
      }
      )
    }
     if (arr2.length > 1) {    
    arr2 = arr2.join(separator);
  } else { return arr2[0]; }

  return arr2;
};

