"use strict";
//Question 64
Object.defineProperty(exports, "__esModule", { value: true });
function combine(text, number) {
    return text + number;
}
let cominineIt = combine("age: ", 22);
console.log(cominineIt);
//Question 65;
function reminder(num1, num2) {
    return num1 % num2;
}
console.log(reminder(5, 2));
//Question 66:
// tried another way to show both true then answer will be true and if one of them is false then answer will be false.
function trueFalse() {
    let num1 = 5;
    let num2 = 6;
    console.log(num1 < num2 && num2 < num1);
}
trueFalse();
//boolean parameters
function checkBothTrueandFalse(val1, val2) {
    return val1 && val2;
}
console.log(checkBothTrueandFalse(true, false));
