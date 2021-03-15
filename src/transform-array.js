const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArray = [];
  if (!Array.isArray(arr)) {
    throw new Error(ar);
  } else {
    for (let number of arr) {
      let noneOf =
        number !== "--discard-prev" &&
        number !== "--double-prev" &&
        number !== "--double-next" &&
        number !== "--discard-next";
      if (number === "--discard-prev" && arr.indexOf(number) !== 0) {
        newArray.pop();
      } else if (number === "--double-prev" && arr.indexOf(number) !== 0) {
        let popped = newArray.pop();
        newArray.push(popped, popped);
      } else if (
        number === "--double-next" &&
        arr[arr.length - 1] !== "--double-next"
      ) {
        newArray.push("--double-next");
      } else if (noneOf && newArray[newArray.length - 1] === "--double-next") {
        newArray.pop();
        newArray.push(number, number);
      } else if (
        number === "--discard-next" &&
        arr[arr.length - 1] !== "--discard-next"
      ) {
        newArray.push("--discard-next");
      } else if (noneOf && newArray[newArray.length - 1] === "--discard-next") {
        newArray.pop();
      } else if (noneOf) {
        newArray.push(number);
      }
    }
  }
  return newArray;
};
