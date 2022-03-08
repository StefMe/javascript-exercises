const reverseString = function (stringToReverse) {
  let cacheString = stringToReverse.split("");
  cacheString = cacheString.reverse();
  return cacheString.join("");
};

// Do not edit below this line
module.exports = reverseString;
