// https://www.youtube.com/watch?v=NIq3qLaHCIs
// The idea of destructuring is to take an object or array and convert it to smaller object/smaller elements/smaller variables
const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// old way to get a and b
// const a = alphabet[0];
// const b = alphabet[1];

// destructuring:
// const [a, b, c] = alphabet;
// the idea of destructuring: You take the element you want to destructure and put it on the right side of the equal sign. So in this case we want to destructure array alphabet. And since this is an array, on the left hand side of the equal sign we put square bracket and name 2 variables a and b. So we're taking the array apart and put this in these constances a amd b. And the position of the element is where they will be pulled out. a is the first element inside the left array so it will get the first element, and b will get the second element.
// But what if we want to skip b? We can just remove b, leave the comma and this is going to say skip the second element
// const [a, , c] = alphabet;

// What if we want to get the rest of the elements inside of the alphabet? That's where the idea of the spread operator comes in.. We just come in the left array, put 3 dots, and name it whatever you want to call it. Here we'll call it rest
// const [a, , c, ...rest] = alphabet;

// Another powerful thing of detructuring and spread operator is that you can use it to combine 2 arrays together. For example we can come down here and say we want to create a newArray to be te alphabet array and the numbers array combined together
// const newArray = [...alphabet, ...numbers];
// for array, doing the old way we can also use concat, like below:
// const newArray = alphabet.concat(numbers);

// console.log(a, c, rest);
// console.log(newArray);

// so for array this is not as useful, but it comes in very useful for combining 2 different objects together
// Another place that the array version of this is every useful is when you're dealing with functions and returning more than one parameters for a function.
// function sumAndMultiply(a, b) {
//   return [a + b, a * b];
// }
// This is the old way
// const array = sumAndMultiply(2, 3);
// console.log(array);

// using array destructuring, we can come in here and name variables on the left like this:
// const [sum, multiply] = sumAndMultiply(2, 3);
// console.log(sum, multiply);

// Something else handy that we can do with destructuring is that we can set default value. So let say in this function maybe return a division
// const [sum, multiply, division = "No division"] = sumAndMultiply(2, 3);
// So by default we can set it to no division. But if we pass it a division it will set to that division
// console.log(sum, multiply, division);

// And the power of destructuring is really not that apparent in arrays. The real power of destructuring comes with object
const personOne = {
  name: "Trinh",
  age: 20,
  address: {
    city: "Somewhere",
    state: "One of them",
  },
};
const personTwo = {
  name: "Sally",
  age: 32,
  address: {
    city: "Somewhere else",
    state: "Another one of them",
  },
};
// const { name, age } = personTwo;
// console.log(name, age);

// For this way of destructuring, the variable needs to match with the key name in the object
// But what if you want to name the variable something else that's different than the key name? All you need to do is put the actual key name on the right left hand side of the colon, and put your variable name on the right hand side of the colon
// const { name: myName, age: myAge } = personOne;
// console.log(myName, myAge);

// And we can still use default value inside object destructuring:
// const { name: myName, age: myAge, favFood = "rice" } = personOne;
// console.log(myName, myAge, favFood);
// personOne["favFood"] = "Water melon";
// const { name: myName, age: myAge, favFood = "rice" } = personOne;
// console.log(myName, myAge, favFood);

// We can do spread operator as well:
// const { name: myName, ...rest } = personOne;
// console.log(rest);

// We can also destructure nested object:
const {
  name: myName,
  address: { street = "a road", state },
} = personOne;
// console.log(street, state);

// Destructure and combine objects:
// Let say we have personThree below that only has name and age.
const personThree = {
  age: 32,
  favFood: "Water melon",
};
// We'll combine person 1 and person 3 so that everyhing in person 3 will overwrite person 1. An easy way to do that is:
const personFour = { ...personOne, ...personThree };
// console.log(personFour);

// Another powerful way to use destructuring is the ability is to use it inside of a function inside on arguments
function printUser({ name, age, favFood = "No fav food" }) {
  console.log(`Name is: ${name}. Age is ${age}. Favourite food is: ${favFood}`);
}
printUser(personFour);
printUser(personOne);
