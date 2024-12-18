// Write a function `longestSubstringLength` that finds the
// length of the longest substring without duplicates in a
// given string. The function should take a string as input
// and return an integer representing the length of the longest
// substring without any repeating characters. The input
// string will only contain lowercase characters.

// Example:
// Input: s = "helloworld"
// Output: 5
// Explanation: The longest substring without repeating characters is "world",
// which has a length of 5.

//Version 1
/*/
function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 0;
  let longestLength = 0;
  let chars = string.split('');
  while(runner <= chars.length) {
    if(uniqueChars(chars.slice(anchor, runner))) {
      longestLength = Math.max(longestLength, runner - anchor);
      runner++;
    } else {
      anchor++;
    }
  }
  return longestLength;
}

function uniqueChars(chars) {
  return (new Set(chars)).size === chars.length;
}
// Version 2
/*/
function longestSubstringLength(string) {
  let anchor = 0;
  let runner = 1;
  let longestLength = 0;
  let uniqueChars = new Set(string[anchor]);
  while(runner <= string.length) {
    if(uniqueChars.size === runner - anchor) {
      longestLength = Math.max(longestLength, runner - anchor);
      uniqueChars.add(string[runner]);
      runner++;
    } else {
      while(string[anchor] !== string[runner - 1]) {
        uniqueChars.delete(string[anchor]);
        anchor++;
      }
      uniqueChars.add(string[runner - 1]);
      anchor++;
    }
  }
  return longestLength;
}

/**/
//console.log(uniqueChars('abba'));
//console.log(uniqueChars('abc'));

console.log(longestSubstringLength("a") === 1);
console.log(longestSubstringLength("aa") === 1);
console.log(longestSubstringLength("ab") === 2);
console.log(longestSubstringLength("abba") === 2);
console.log(longestSubstringLength("abc") === 3);
console.log(longestSubstringLength("helloworld") === 5);
console.log(longestSubstringLength("dvdf") === 3);
console.log(longestSubstringLength("tmmzuxt") === 5);
console.log(longestSubstringLength("thisishowwedoit") === 6);
console.log(longestSubstringLength("longestsubstring") === 8);
console.log(longestSubstringLength("aabbccddeffghijklmno") === 10);
console.log(longestSubstringLength("abcdefghijklmnopqrstuvwxyz") === 26);
