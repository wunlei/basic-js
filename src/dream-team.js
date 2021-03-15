const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let firstLetters = [];
  let first;
  if (!Array.isArray(members)) {
    return false;
  } else {
    for (let name of members) {
      if (typeof name === 'string') {
        first = name.charAt(0);
        if (first === " ") {
          for (let i = 0; i < name.length; i++) {
            let checkSpace = name.charAt(i);
            if (checkSpace !== " ") {
              first = name.charAt(i);
              break;
            }
          }
        }
        firstLetters.push(first.toUpperCase());
      }
    }
  }
  let clearLetters = [];
  if (firstLetters.length > members.length) {
    for (let i = 0; i < firstLetters.length; i++) {
      clearLetters.push(firstLetters[i + 1]);
    }
  } else {
    clearLetters = firstLetters;
  }
  let sortletters = clearLetters.sort();
  let teamName = sortletters.join('').toUpperCase();
  return teamName;
};