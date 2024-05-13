"use strict";
// Question 28:
Object.defineProperty(exports, "__esModule", { value: true });
let age = 18;
if (age < 2) {
    console.log("You are a baby");
}
else if (age >= 2 && age < 4) {
    console.log("You are a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a kid");
}
else if (age >= 13 && age < 20) {
    console.log("You are a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are a adult.");
}
else if (age >= 65) {
    console.log("You are a adult.");
}
// Question 29:
let favoriteFruits = ["Apple", "Banana", "Mango"];
if (favoriteFruits.includes("Banana")) {
    console.log("I really like banana");
}
if (favoriteFruits.includes("Apple")) {
    console.log("I really like banana");
}
if (favoriteFruits.includes("Mango")) {
    console.log("I really like Mango");
}
// Question 30:
let userNames = ["Eric", "Javed", "Mubean", "Admin", "Ali"];
userNames.forEach((names) => {
    if (names == "Admin") {
        console.log(`Hello ${names}, would you like to see a status report?`);
    }
    else {
        console.log(`Hello ${names}, thank you for logging in again.`);
    }
});
