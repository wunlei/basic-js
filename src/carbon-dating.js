const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string') {
    return false;
  } else {
    let intActivity = parseFloat(sampleActivity);
    if (isNaN(intActivity) === true || intActivity < 1 || intActivity > MODERN_ACTIVITY) {
      return false;
    } else {
      const atomsRatio = MODERN_ACTIVITY / intActivity;
      const rateLaw = Math.log(atomsRatio);
      const k = Math.LN2 / HALF_LIFE_PERIOD;
      const elapsedTime = rateLaw / k;
      return Math.ceil(elapsedTime);
    }
  }
};