function assignTreats(pets, treats) {
  pets = pets.sort(increasing);
  treats = treats.sort(increasing);
  let happy = 0;
  let treatPtr = 0;
  pets.forEach( pet => {
    while(pet > treats[treatPtr]) {
      treatPtr++;
    }
    if(treats[treatPtr]) {
      treatPtr++;
      happy++;
    }
  });
  return happy;
}

let increasing = (a, b) => (a - b);

console.log(assignTreats([3, 4, 2], [1, 2, 3]) === 2);
console.log(assignTreats([1, 5], [5, 5, 6]) === 2);
console.log(assignTreats([1, 2, 3], [3]) === 1);
console.log(assignTreats([2], [1, 2, 1, 1]) === 1);
console.log(assignTreats([4, 3, 1], [2, 1, 3]) === 2);
console.log(assignTreats([1,2,3], [1,2,3]) === 3);
console.log(assignTreats([4, 5, 6], [1,2,3]) === 0);

// All test cases should log true.
