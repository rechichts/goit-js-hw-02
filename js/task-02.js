"use strict";

function calculateEngravingPrice(message, pricePerWord) {
  let arr = message.split(" ");
  return arr.length * pricePerWord;
}

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10,
  ),
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20,
  ),
);

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 40),);

console.log(calculateEngravingPrice('Donec orci lectus aliquam est', 20),);