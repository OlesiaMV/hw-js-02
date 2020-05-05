"use strict";

const findLongestWord = function (string) {
  const stringWords = string.split(" ");
  let findLongestWord = stringWords[0];

  for (const stringWord of stringWords) {
    if (stringWord.length > findLongestWord.length) {
      findLongestWord = stringWord;
    }
  }

  return findLongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
