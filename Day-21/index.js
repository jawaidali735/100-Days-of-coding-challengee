"use strict";
//Question 61;
Object.defineProperty(exports, "__esModule", { value: true });
var category;
(function (category) {
    category[category["cars"] = 0] = "cars";
    category[category["trucks"] = 1] = "trucks";
    category[category["bikes"] = 2] = "bikes";
})(category || (category = {}));
;
console.log(category.cars);
// we use interface to update to typescript what value should be present in an object and what types.
let student = {
    names: "javed, ali",
    age: 22,
    courses: ["chemistry", "physics", "math", "biology"]
};
console.log(student);
let circle = {
    kind: "circle",
    redius: 2
};
let rectangular = {
    kind: "rectangular",
    width: 3,
    height: 2
};
console.log(circle);
console.log(rectangular);
