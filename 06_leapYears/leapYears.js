const leapYears = function (yearToCheck) {
  if (yearToCheck % 4 === 0) {
    if (yearToCheck % 100 === 0 && yearToCheck % 400 != 0) {
      return false;
    }
    return true;
  }
  return false;
};

// Do not edit below this line
module.exports = leapYears;
