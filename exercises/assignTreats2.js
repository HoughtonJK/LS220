function assignTreats(pets, treats) {
  pets.sort((a, b) => a - b);
  treats.sort((a, b) => a - b);
  let satisfied = 0;
  let petPtr = 0;
  let treatPtr = 0;

  while(petPtr < pets.length && treatPtr < treats.length) {
    if(pets[petPtr] <= treats[treatPtr]) {
      satisfied++;
      petPtr++;
    }
    treatPtr++;
  }

  return satisfied;
}

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.
