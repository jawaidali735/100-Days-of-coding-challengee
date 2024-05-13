"use strict";
// Question 34:
Object.defineProperty(exports, "__esModule", { value: true });
let favoritePizza = ["Chicken tika Piazza", "Paproni Pizza", "Creamy Pizza"];
favoritePizza.forEach((pizza) => {
    console.log(`I really like ${pizza}`);
});
console.log("I really love pizza!");
// Question 35:
let AnimalArr = ["cat", "dog", "rabbit"];
AnimalArr.forEach((animal) => {
    console.log(animal);
});
AnimalArr.forEach((animal) => {
    console.log(`A ${animal} would make a great pet`);
});
console.log("Any of these animals would make a great pet!");
// Question 36:
function tshirt(size, text) {
    console.log(`Making ${size} size of shirt with the message ${text}`);
}
tshirt(24, "code with jawaid.");
tshirt(30, "cod ewith jawaid.");
tshirt(20, "code with jawaid.");
