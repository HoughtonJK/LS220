function findNextLetter(letters, keyLetter) {
  let start = 0;
  let end = letters.length - 1;
  let result = letters[0];
  while(start <= end) {
    let middle = Math.floor((start + end) / 2);
    if(letters[middle] > keyLetter) {
      result = letters[middle];
      end = middle - 1;
    } else {
      start = middle + 1;
    }
  }
  return result;
}

console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');
// All test cases should log true.
