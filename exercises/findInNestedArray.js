function findInNestedArray(matrix, target) {
  let firstRow = 0;
  let lastRow = matrix.length - 1;
  let firstPos = 0;
  let lastPos = matrix[0].length - 1;
  while(firstRow < lastRow) {
    let middle = Math.floor((firstRow + lastRow) / 2);
    if(matrix[middle][firstPos] > target) {
      lastRow = middle - 1;
    } else if (matrix[middle][lastPos] < target) {
      firstRow = middle + 1;
    } else {
      firstRow = middle;
      break;
    }
  }
  while(firstPos < lastPos) {
    let mid = Math.floor((firstPos + lastPos) / 2);
    if(matrix[firstRow][mid] > target) {
      lastPos = mid - 1;
    } else if (matrix[firstRow][mid] < target) {
      firstPos = mid + 1;
    } else {
      firstPos = mid;
      break;
    }
  }
  return matrix[firstRow][firstPos] === target;
}

console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.
