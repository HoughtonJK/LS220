function reverseWords(string){
  let result = '';
  let wordPtr = 0;
  while(wordPtr <= string.length) {
    if(string[wordPtr] === ' ' || wordPtr === string.length) {
      let letterPtr = wordPtr - 1;
      while(letterPtr >= 0 && string[letterPtr] !== ' ') {
        result += string[letterPtr];
        letterPtr--;
      }
      result += string[wordPtr] ? ' ' : '';
    }
    wordPtr++;
  }
  console.log(result);
  return result;
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
