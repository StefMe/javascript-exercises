const removeFromArray = function (usedArray, ...numbersToRemove) {
  let newArray = usedArray.filter(
    (element) => !numbersToRemove.includes(element)
  );
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
