// You are given a grid represented as a
// nested array filled with strings.

// Chaos is standing at the top-left corner of
// the grid and can move either down or right at
// any point in time. However, there are sleeping
// cats in certain squares, represented by the
// letter "C" in the grid, and Chaos cannot go through
// these squares.

// Determine the number of distinct paths Chaos
// can take to reach a bowl of treats placed at
// the bottom-right corner of the grid.

// Define a function `chaosInTheGridWithCats` that,
// given a nested array, returns the number of
// unique paths that Chaos can take to reach the
//  bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "C", ""],
  ["", "", ""],
];

// There is only one distinct path Chaos can take:
// 1. Down -> Right -> Right

function chaosInTheGridWithCats(grid) {
  const memo = new Array(grid.length).fill().map(() => new Array(grid[0].length).fill(-1));

  function pathsTo(row, col) {
    if(memo[row][col] !== -1) {
      return memo[row][col];
    }
    if(row === 0 && col === 0){
      memo[row][col] = 1;
      return 1;
    } else if(row === 0) {
      memo[0][col] = grid[0][col] === 'C' ? 0 : pathsTo(0, col - 1);
      return  memo[0][col];
    }else if(col === 0) {
      memo[row][0] = grid[row][0] === 'C' ? 0 : pathsTo(row - 1, 0);
      return memo[row][0];
    } else if(row !== 0 && col !== 0) {
      memo[row][col] = grid[row][col] === 'C' ? 0 : pathsTo(row - 1, col) + pathsTo(row, col - 1);
    }
    return memo[row][col];
  }

  let result = pathsTo(grid.length - 1, grid[0].length - 1);
  console.log(result, memo)
  return result;
}

// Test Cases:

const grid1 = [
  ["", "C"],
  ["", ""],
];
const grid2 = [["", "C"]];
const grid3 = [
  ["", "", ""],
  ["", "C", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", "C"],
  ["", "C", "", "", ""],
  ["", "", "", "C", ""],
];
const grid5 = [
  ["", "", "", "", "C", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "C", "", ""],
  ["", "C", "", "", "", ""],
  ["", "", "", "", "", ""],
];

console.log(chaosInTheGridWithCats(grid1) === 1);
console.log(chaosInTheGridWithCats(grid2) === 0);
console.log(chaosInTheGridWithCats(grid3) === 2);
console.log(chaosInTheGridWithCats(grid4) === 2);
console.log(chaosInTheGridWithCats(grid5) === 43);
