"use strict";
// Question 1 : I have already installed Node.js, TypeScript, and VS Code.
Object.defineProperty(exports, "__esModule", { value: true });
// Question 2:
let personName = "jawaid ali";
console.log(`Hello ${personName}, would you like to learn some javascript or typesrcipt.`);
// we can also console the name like this way.
console.log("Hello " + personName + ", would you like to learn some typescript.");
// Question 3 :
let PersonsName = "jawaid ali";
// lowerCase.
let lowerCase = PersonsName.toLowerCase();
console.log(lowerCase);
// uppercase.
let upperCase = PersonsName.toUpperCase();
console.log(upperCase);
// titlecase.
let titleCase = PersonsName.charAt(0).toUpperCase() + PersonsName.slice(1).toLowerCase();
console.log(titleCase);
