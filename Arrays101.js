const coolFunction = function (array) {
  array.push("cool");
  return array;
};
console.log("add cool", coolFunction(["ik", "ben", "behoorlijk"]));

const longFunction = function (array) {
  return array.length;
};
console.log("Aantal items", longFunction(["hi", "wij", "zijn", "items"]));

const firstItem = function (array) {
  return array[0];
};
console.log("Eerste item:", firstItem(["hi", "wij", "zijn", "items"]));

const lastItem = function (array) {
  return array[array.length - 1];
};
console.log("Laatste item:", lastItem(["hi", "wij", "zijn", "items"]));

const sliceItem = function (array) {
  return array.slice(-3);
};
console.log("sliced item:", sliceItem(["hi", "wij", "zijn", "items"]));

const spliceItem = function (array) {
  return array.splice(1, 3);
};
console.log("spliced item:", spliceItem(["hi", "wij", "zijn", "items"]));

const joinItem = function (array) {
  return array.join(" ");
};
console.log("joined item:", joinItem(["hi", "wij", "zijn", "items"]));

const joinArrays = function (array) {
  let array2 = ["nu", "zijn", "we", "met", "meer!"];
  return array.concate(array2);
};
console.log("joined arrays:", joinArrays(["hi", "wij", "zijn", "items"]));
