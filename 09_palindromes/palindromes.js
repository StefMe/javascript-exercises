const palindromes = function (wordToCheck) {
  wordToCheck = wordToCheck.toLowerCase();
  wordToCheck = wordToCheck.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g, "");
  let reverseWordArray = wordToCheck.split("");
  reverseWordArray = reverseWordArray.reverse();
  let reverseWord = reverseWordArray.join("");
  return reverseWord === wordToCheck ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
