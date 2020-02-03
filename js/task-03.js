"use strict";

const findLongestWord = function(string) {
    let ar = string.split(" ");
    ar.sort((a, b) => a.length - b.length);
    return ar[ar.length - 1];
  };
  
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); 

console.log(findLongestWord('Google do a roll')); 

console.log(findLongestWord('May the force be with you')); 