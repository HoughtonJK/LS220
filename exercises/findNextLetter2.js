function findNextLetter(arr, letter) {
  let front = 0;
  let back = arr.length - 1;
  while(front <= back) {
    let mid = Math.floor((front + back) / 2);
    if(arr[mid] > letter && arr[mid - 1] <= letter) {
      return arr[mid];
    } else if(arr[mid] <= letter) {
      front = mid + 1;
    } else {
      back = mid - 1;
    }
  }
  return arr[0];
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
