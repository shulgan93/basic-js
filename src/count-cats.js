const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  /*   return arr.reduce((acc, el) => {
    let count = 0;
    el.forEach((element) => {
      if (element === "^^") {
        count++;
      }
    });
    return (acc += count);
  }, 0); */

  let res = 0;
  for (newArr of arr) {
    for (el of newArr) {
      if (el === "^^") {
        res++;
      }
    }
  }
  return res;
};
