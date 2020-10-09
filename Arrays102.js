//deel 1:
const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

// Hier komt jouw functie
const findSpiderMan = superheroes.find((superhero) => {
  return superhero.name === "Spiderman";
});
console.log(findSpiderMan);

//deel 2:

const doubleArrayValues = [1, 2, 3];
let times2 = [];

doubleArrayValues.forEach(function (item) {
  times2.push(item * 2);
});
console.log(times2);

//deel 3:
//const numbers = [1, 4, 3, 6, 9, 7, 11];
const numbers2 = [1, 2, 1, 2, 1, 2];

function containsNumberBiggerThan10(n) {
  return n > 10;
}
console.log(numbers2.some(containsNumberBiggerThan10));

//deel 4:
const countries = [
  "Canada",
  "France",
  "Germany",
  "Italy",
  "Japan",
  "United Kingdom",
  "United States",
];

const isItalyInTheGreat7 = countries.includes("Italy");

console.log(isItalyInTheGreat7);

// result should be true

// deel 5:
const tenfoldArrayValues = [1, 4, 3, 6, 9, 7, 11];
let times10 = [];

tenfoldArrayValues.forEach(function (item) {
  times10.push(item * 10);
});
console.log(times10);

//deel 6:
const numbers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98];

function containsNumberBelow100(n) {
  return n < 100;
}
console.log(numbers.every(containsNumberBelow100));

// bonus:
const numbersSum = [
  1,
  81,
  4,
  53,
  3,
  6,
  79,
  2,
  43,
  7,
  28,
  11,
  77,
  84,
  98,
  101,
  206,
  234,
];

const total = numbersSum.reduce((sum, currentTotal) => {
  return sum + currentTotal;
}, 0);

console.log(total);
