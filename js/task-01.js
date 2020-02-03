"use strict";

const logItems = function(array) {
  let arrayItems = [];
  for (let i = 0; i < array.length; i += 1) {
    arrayItems.push(`${i + 1} : ${array[i]}`);
  }
  return arrayItems.join("\n");
};

console.log(logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));
console.log(logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]));