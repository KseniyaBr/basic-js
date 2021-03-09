const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let  catsArr = [];
  for(let i = 0; i < matrix.length; i++) {
    const res = matrix[i].filter( cat => {
      return cat === "^^";
    });
    catsArr = catsArr.concat(res);
  }
  return catsArr.length;
};
