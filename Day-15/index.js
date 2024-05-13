"use strict";
//Question 43:
Object.defineProperty(exports, "__esModule", { value: true });
let magiciansName = ["Harry Potter", "Hermione Granger", "Ron Weasley", "Albus Dumbledore", "Severus Snape", "Lord Voldemort"];
let copyArray = [...magiciansName];
function showMagiciansName() {
    magiciansName.forEach((magician) => {
        console.log(magician);
    });
}
;
function MakeGreatMagiciansName() {
    copyArray.forEach((magician) => {
        console.log(`The great ${magician}`);
    });
}
;
showMagiciansName();
MakeGreatMagiciansName();
// Question 44:
function makeSandwich(items) {
    console.log("Making a sandwich");
    items.forEach((item) => {
        console.log("- ", item);
    });
    console.log("Enjoying sandwich");
}
makeSandwich(['Ham', 'Creamy', 'lettuce']);
makeSandwich(['Turkey', 'Bacon']);
makeSandwich(['Peanut', 'jelly']);
//question: 45
function carInfo(manufacturer, modelName, ...extraOption) {
    const cInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...extraOption)
    };
    return cInfo;
}
;
let result = carInfo('BMW', 'i8', { color: 'blue' }, { feature: ['foldable doors', 'navigation', 'automatic power window'] });
console.log(result);
