"use strict";
//Question 67:
Object.defineProperty(exports, "__esModule", { value: true });
function number(number1, number2) {
    //here we have used number NumberConstructor to change a string into number.
    return Number(number1) + number2;
}
;
console.log(number("5", 2));
//Question 68:
function roundDecimals(num1, num2) {
    return Math.round((num1 * num2) * 100) / 100;
}
console.log(roundDecimals(0.2, 0.3));
//Question 69:
function quotientAndremaimder(divid, divisor) {
    let quotient = Math.floor(divid / divisor);
    let remainder = divid % divisor;
    return { quotient, remainder };
}
;
console.log(quotientAndremaimder(10, 3));
