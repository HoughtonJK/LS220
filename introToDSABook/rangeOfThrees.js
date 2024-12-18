// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]

function findRange(array) {
  let front = -1;
  let back = -1;

  let frontStart = 0;
  let frontEnd = array.length - 1;
  let backStart = 0;
  let backEnd = array.length - 1;

  while ((frontStart < frontEnd && front < 0) || (backStart < backEnd && back < 0)) {
    let frontMiddle = Math.floor((frontStart + frontEnd) / 2);
    let backMiddle = Math.floor((backStart + backEnd) / 2);

    if(array[frontMiddle] === 3 && array[frontMiddle - 1] !== 3) {
      front = frontMiddle;
    } else if(array[frontMiddle] >= 3) {
      frontEnd = frontMiddle - 1;
    } else {
      frontStart = frontMiddle + 1;
    }
    if(array[backMiddle] === 3 && array[backMiddle + 1] !== 3) {
      back = backMiddle;
    } else if(array[backMiddle] > 3) {
      backEnd = backMiddle - 1;
    } else {
      backStart = backMiddle + 1;
    }
  }
  return [front, back];
}

console.log(findRange([1, 2, 3, 3, 3, 3, 3, 4, 5]));
console.log(findRange([1, 2, 4, 4, 5, 9, 10]));
