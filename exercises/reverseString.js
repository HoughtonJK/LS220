function reverseString(str) {
  if(str === '') return '';
  let result = reverseString(str.slice(1));
  return result + str[0]
}

console.log(reverseString("hello") === "olleh");
console.log(reverseString("world") === "dlrow");
console.log(reverseString("a") === "a");
console.log(reverseString("") === "");
console.log(reverseString("recursion") === "noisrucer");

// All test cases should log true.
