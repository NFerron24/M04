// zet de functie om naar een arrow functie

const ikRockArrowFunctions = () => {
  console.log("Joe, ik rock de arrow functions!");
};
ikRockArrowFunctions();
// zonder curly braces

const ikRockArrowFunctions2 = () =>
  console.log("Joe, ik rock de arrow functions!");
ikRockArrowFunctions2();

// één regel functie
const fivePlusSeven = () => 5 + 7;
fivePlusSeven();
console.log(fivePlusSeven());

// som met haakjes functie
const myFunction = (a, b) => a + b;
console.log(myFunction(1, 4));

// som functie zonder haakjes
const addFive = (a) => a + 5;
console.log(addFive(1));

//object statement
const createObject = () => ({ greeting: "Hoi" });
console.log(createObject());
