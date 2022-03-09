const fibonacci = function (fibonacciNumber) {
  if (fibonacciNumber < 0) {
    return "OOPS";
  }
  let fibonacciCache = [];
  for (let index = 0; index < fibonacciNumber; index++) {
    if (index < 2) {
      fibonacciCache.push(1);
    } else {
      fibonacciCache.push(
        fibonacciCache[index - 1] + fibonacciCache[index - 2]
      );
    }
  }
  return fibonacciCache[fibonacciNumber - 1];
};

// Do not edit below this line
module.exports = fibonacci;
