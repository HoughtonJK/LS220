// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

/*
Problem: Input Grid as matrix of strings
  Output: count of paths to lower right point on grid.
Examples: given
Data: Memo Matrix (array of arrays) that contains count of paths to a grid point
  input matrix
  row variable
  column variable
Algore:
  Function inputs grid:
  Using pathsTo(grid, row, col) helper function recursively find the paths to row col.
  pathsTo:
    if memo[row][col] exists, return memo[row][col]
    if row and col = 0, set memo[0][0] = 1 return 1
    if row = 0 set memo[0][col] = pathsTo( 1, cols) return memo[0][col]
    if col = 0 set memo[row][0] pathsTo(row, 1) return memo[row][0]
    else set memo[row][col] = pathsTo(row, col) + pathsTo(row, col)
      return memo[row][col]
*/
/*/
function chaosInTheGrid(grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  // Initialize a cache as a nested array filled with zeroes
  const cache = new Array(rows).fill().map(() => new Array(cols).fill(0));

  function pathsToCoord(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }

    if (cache[row][col] !== 0) {
      return cache[row][col];
    }

    cache[row][col] = pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);

    return cache[row][col];
  }
  let result = pathsToCoord(rows - 1, cols - 1);
  console.log(cache);
  return result;
}
/*/
function chaosInTheGrid(grid) {
//  const memo = new Array(grid.length).fill(new Array(grid[0].length).fill(0));
  const memo = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(0));

  function pathsTo(row, col) {
    if(memo[row][col] !== 0) {
      return memo[row][col];
    }
    if(row === 0 && col === 0){
      memo[row][col] = 1;
      return 1;
    } else if(row === 0) {
      memo[0][col] = pathsTo(0, col - 1);
      return  memo[0][col];
    }else if(col === 0) {
      memo[row][0] = pathsTo(row - 1, 0);
      return memo[row][0];
    } else if(row !== 0 && col !== 0) {
      memo[row][col] = pathsTo(row - 1, col) + pathsTo(row, col - 1);
    }
    return memo[row][col];
  }

  let result = pathsTo(grid.length - 1, grid[0].length - 1);
  console.log(result, memo)
  return result;
}

// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
const grid6 = [
  ["", "", "", "", "", ""],
];
const grid7 = [
  [""],
  [""],
  [""],
  [""],
  [""],
  [""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
console.log(chaosInTheGrid(grid6) === 1);
console.log(chaosInTheGrid(grid7) === 1);
// All test cases should log true
