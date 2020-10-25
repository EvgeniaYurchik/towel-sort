
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let arr = [];  
  if (matrix != undefined) {
    matrix.forEach(function(item, i, ar) {
      if (i = 0 || i % 2 == 0) {
        item.sort((a, b) => a - b);
        return arr.push(...item);
      } else {
        item.sort((a, b) => b - a);
        return arr.push(...item);
      } 
    });  
  }
  return arr;
}
