function reverseWords(str) {
  let result = [];
  str.split(' ').forEach( word => {
    result.push("");
    let resultEnd = result.length -1;
    for(let i = word.length - 1; i >= 0; i--) {
      result[resultEnd] += word[i];
    }
  });
  return result.join(" ");
}

console.log(reverseWords("Hello World") === "olleH dlroW");
console.log(reverseWords("JavaScript is fun") === "tpircSavaJ si nuf");
console.log(reverseWords("Coding in the sun") === "gnidoC ni eht nus");
console.log(reverseWords("Launch School") === "hcnuaL loohcS");
