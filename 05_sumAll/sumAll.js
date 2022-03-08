const sumAll = function (startingNumber, endingNumber) {
  if (
    typeof startingNumber != "number" ||
    typeof endingNumber != "number" ||
    startingNumber < 0 ||
    endingNumber < 0
  ) {
    return "ERROR";
  }
  let sum = 0;
  let cache = 0;
  if (endingNumber < startingNumber) {
    cache = startingNumber;
    startingNumber = endingNumber;
    endingNumber = cache;
  }
  for (let index = startingNumber; index <= endingNumber; index++) {
    sum = sum + index;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
