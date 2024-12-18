function findAverages(numbers, size) {
  let result = [];
  let sum = 0;
  let ptr = 0;

  while(ptr < size) {
    sum += numbers[ptr];
    ptr++;
  }
  while(ptr <= numbers.length) {
    result.push(sum / size);
    sum = sum + numbers[ptr] - numbers[ptr - size];
    ptr++;
  }
  return result;
}

console.log(findAverages([1, 2, 3, 4, 5, 6], 3)); // [ 2, 3, 4, 5 ]
console.log(findAverages([1, 2, 3, 4, 5], 2));    // [1.5, 2.5, 3.5, 4.5]
console.log(findAverages([10, 20, 30, 40, 50], 4)); // [ 25, 35 ]
console.log(findAverages([5, 5, 5, 5, 5], 1));      // [ 5, 5, 5, 5, 5 ]
console.log(findAverages([1, 3, 2, 6, -1, 4, 1, 8, 2], 5)); // [2.2, 2.8, 2.4, 3.6, 2.8]
