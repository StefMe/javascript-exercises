const repeatString = function (stringToRepeat, multiplyer) {
  if (multiplyer < 0) {
    return "ERROR";
  }
  return stringToRepeat.repeat(multiplyer);
};

// Do not edit below this line
module.exports = repeatString;
