// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

function minimumCount(array) {
  let middle = 0;
  let left = 0;
  let right = array.length - 1;
  while(left < right) {
    middle = Math.floor((left + right) / 2);
    if (array[middle] === 0) {
      break;
    } else if (array[middle] < 0) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  console.log('middle ', middle);
  return array[left] === 0 ? Math.min(left, array.length - left - 1) : Math.min(left, array.length - left);
}
console.log(210023210);
console.log(minimumCount([-4, -3, -2, -1, 3, 4]));
console.log(minimumCount([-3, 1, 2, 3, 4, 5]));
console.log(minimumCount([-5, -4, -3, -2, -1]));
console.log(minimumCount([1, 2, 3, 4, 5]));
console.log(minimumCount([-2, -1, 1, 2]));
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]));
console.log(minimumCount([-3, -2, -1, 0, 5, 6]));
console.log(minimumCount([-1, 0, 1]));
console.log(minimumCount([]));

// All test cases should log true.
