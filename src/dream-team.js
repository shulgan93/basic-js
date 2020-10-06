const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  if (!Array.isArray(arr)) return false;
  const newArr = arr.map((el) => {
    if (typeof el == "string") {
      return el.trim()[0].toUpperCase();
    }
  });

  let sort = newArr.sort().join("");
  return sort;
};
