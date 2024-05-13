"use strict";
//Question 76:
Object.defineProperty(exports, "__esModule", { value: true });
function twoNumber(num1, num2) {
    return num1 + num2;
}
let add = twoNumber(2, 4);
console.log(add);
//Question 77:
function userName(name = "anonymous") {
    console.log(`Hello! ${name}`);
}
//with provided argument.
userName("javed ali"); //result: javed ali
//Without nad now the default parameter work.
userName(); // result: anonymous
//Question 78: 
//with function keyword declaration.
function squar(number) {
    return number * number;
}
console.log(squar(2)); // output: 4
//with experssion declaration which is stored in a variable.
let squaring = (number2) => {
    return number2 * number2;
};
let squaringStored = squaring(8);
console.log(squaringStored); //output: 64
