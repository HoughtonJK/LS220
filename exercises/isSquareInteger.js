function isSquareInteger(num) {
  let front = 1;
  let end = num;
  if(num === 1) return true;
  while(front < end) {
    let middle = Math.floor((front + end) / 2);
    if(middle ** 2 === num) {
      return true;
    } else if(middle ** 2 > num) {
      end = middle - 1;
    } else {
      front = middle + 1;
    }
  }
  return front ** 2 === num;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
