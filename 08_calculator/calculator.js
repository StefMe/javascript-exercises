const add = function (value1, value2) {
  return value1 + value2;
};

const subtract = function (value1, value2) {
  return value1 - value2;
};

const sum = function (valueArray) {
  let initialValue = 0;
  return valueArray.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );
};

const multiply = function (valueArray) {
  let initialValue = 1;
  return valueArray.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    initialValue
  );
};

const power = function (value1, value2) {
  return Math.pow(value1, value2);
};

const factorial = function (value) {
  let sumCache = 1;
  for (let index = 1; index <= value; index++) {
    sumCache = sumCache * index;
  }
  return sumCache;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
