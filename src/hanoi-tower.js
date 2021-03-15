const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let calcObject = {};
  const turns = (2 ** disksNumber) - 1;
  calcObject.turns = turns;
  let turnsPerSec = turnsSpeed / 3600;
  const seconds = Math.floor(turns / turnsPerSec);
  calcObject.seconds = seconds;
  return calcObject;
};
