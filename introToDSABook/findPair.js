// Given a list of numbers,
// find two numbers in the list that add up to ten
// and return them. If no such pair exists, return null.

// It is guaranteed that there is either exactly one pair of numbers
// that satisfies the condition, or no pairs at all.

/*
Problem: From a list of numbers return a pair of numbers that add to 10, otherwise return null
  Input: list of numbers as an array.
  OUtput: pair of numbers in an array or null
  --numbers can be positive or negative.
  --numbers are integer only.
Examples: Below
Data:
  Input array of numbers.
  OUtput array of numbers [a, b] such that a + b = 10
Algorithm: for each element in the array, except the last one, add it to each of the remaining
  arrays. If result === 10, put both elements into an array and return it.
C
*/

function findPair(numbers) {
  for(let i = 0; i < numbers.length - 1; i += 1) {
    for(let j = i + 1; j < numbers.length; j += 1) {
      if(numbers[i] + numbers[j] === 10) return [numbers[i], numbers[j]];
    }
  }
  return null;
}


// Test Cases:

console.log(findPair([2, 3, 9, 7])); // Output: [3, 7]
console.log(findPair([10, 6, -1, 2])); // null
console.log(findPair([1, 2, 5, 6])); // null
console.log(findPair([1, 3, 6, 10, 4, 5])); // [6, 4]
console.log(findPair([4, -5, 3, 15, 5])); // [-5, 15]
