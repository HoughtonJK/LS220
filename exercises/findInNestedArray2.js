function findInNestedArray(matrix, target) {
  let rows = matrix.length;
  let cols = matrix[0].length;
  let frontRow = 0;
  let backRow = rows - 1;

  while(frontRow <= backRow) {
    let midRow = Math.floor((frontRow + backRow)/ 2);
    if(matrix[midRow][0] > target) {
      backRow = midRow - 1;
    } else if(matrix[midRow][cols - 1] < target) {
      frontRow = midRow + 1;
    } else {
      frontRow = midRow;
      break;
    }
  }
  if(frontRow === rows) return false;
  let frontCol = 0;
  let backCol = cols - 1;

  while(frontCol <= backCol) {
    let midCol = Math.floor((frontCol + backCol)/ 2);
    if(matrix[frontRow][midCol] > target) {
      backCol = midCol - 1;
    } else if(matrix[frontRow][midCol] < target) {
      frontCol = midCol + 1;
    } else {
      return true;
    }
  }

  return false;
}
console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.
