const findTheOldest = function (objectToSearch) {
  let maxYearLived;
  let oldestPerson;

  let ageArray = objectToSearch.map((el) => {
    maxYearLived = el.hasOwnProperty("yearOfDeath")
      ? el.yearOfDeath
      : new Date().getFullYear();
    return maxYearLived - el.yearOfBirth;
  });
  let arrayPosition = ageArray.indexOf(Math.max(...ageArray));
  let objectName = objectToSearch[arrayPosition];
  return objectName;
};

// Do not edit below this line
module.exports = findTheOldest;
