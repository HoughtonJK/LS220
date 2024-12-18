function countPairs(arr, target) {
  let first = 0;
  let second = 1;
  let result = 0;
  while(first < arr.length - 1) {
    if(arr[first] + arr[second] > target) {
      result += (arr.length - second);
      first++;
      second = first + 1;
    } else if(second < arr.length - 1) {
      second++;
    } else {
      first++;
      second = first + 1;
    }
  }
  return result;
}

console.log(countPairs([1, 2, 3, 4, 5], 6) == 4);
// Pairs: (2, 5), (3, 4), (3, 5), (4, 5)

console.log(countPairs([1, 2, 3, 4, 5], 8) == 1);
// Pair: (4, 5)

console.log(countPairs([1, 3, 5, 7], 6) == 4);
// Pairs: (1, 7), (3, 5), (3, 7), (5, 7)

console.log(countPairs([1, 2, 3, 4], 5) == 2);
// Pairs: (2, 4), (3, 4)

console.log(countPairs([1, 2, 3, 4, 5], 10) == 0);
// No pairs
