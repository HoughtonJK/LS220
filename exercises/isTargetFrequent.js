function isTargetFrequent(numbers, target) {
  return lastInstance(numbers, target) - firstInstance(numbers, target) >= 3;
}

function firstInstance(numbers, target) {
  let front = 0;
  let back = numbers.length - 1;
  while(front < back) {
    let middle = Math.floor((front + back) / 2);
    if(numbers[middle] === target && (numbers[middle - 1] === undefined || numbers[middle - 1] < target)) {
      front = middle;
      break;
    } else if(numbers[middle] >= target) {
      back = middle - 1;
    } else {
      front = middle + 1;
    }
  }
  return front;
}

function lastInstance(numbers, target) {
  let front = 0;
  let back = numbers.length - 1;
  while(front < back) {
    let middle = Math.floor((front + back) / 2);
    if(numbers[middle] === target && (numbers[middle + 1] === undefined || numbers[middle + 1] > target)) {
      back = middle;
      break;
    } else if(numbers[middle] <= target) {
      front = middle + 1;
    } else {
      back = middle - 1;
    }
  }
  return back;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
