function isSquareInteger(num) {
  let low = 1;
  let high = num;
  while(low <= high) {
    let mid = Math.floor((low + high) / 2 );
    if(mid * mid === num) {
      return true;
    } else if(mid * mid < num) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return false;
}

console.log(isSquareInteger(1) === true);
console.log(isSquareInteger(4) === true);
console.log(isSquareInteger(16) === true);
console.log(isSquareInteger(14) === false);
console.log(isSquareInteger(25) === true);
console.log(isSquareInteger(26) === false);

// All test cases should log true.
