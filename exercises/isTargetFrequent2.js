function isTargetFrequent(nums, target) {
  let front = 0;
  let back = nums.length - 1;
  while(front <= back) {
    let mid = Math.floor((front + back) / 2);
    if(nums[mid] === target && nums[mid - 1] !== target) {
      front = mid;
      break;
    } else if(nums[mid] < target) {
      front = mid + 1;
    } else {
      back = mid - 1;
    }
  }
  let start = 0;
  let end = nums.length - 1;
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    if(nums[mid] === target && nums[mid + 1] !== target) {
      end = mid;
      break;
    } else if(nums[mid] <= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return end - front >= 3;
}

console.log(isTargetFrequent([1, 2, 3, 3, 3, 3, 4], 3) === true);
console.log(isTargetFrequent([1, 1, 1, 1, 2, 3, 4], 1) === true);
console.log(isTargetFrequent([1, 2, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([1, 1, 3, 4, 5], 2) === false );
console.log(isTargetFrequent([2, 2, 2, 3, 3, 3, 4], 3) === false);
console.log(isTargetFrequent([4, 4, 4, 4, 4, 4, 4], 4) === true);

// All test cases should log true.
