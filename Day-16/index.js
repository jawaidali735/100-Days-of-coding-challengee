"use strict";
// Question 46:
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    Make: "Dell",
    Model: "Inspiron",
    Year: 2022,
    describe: function () {
        console.log(`I have got a new ${laptop.Make} ${laptop.Model} laptop of ${laptop.Year}`);
    }
};
laptop.describe();
//Question 47:
let laptops = [
    {
        Make: "Dell",
        Model: "Inspiron",
        Year: 2022,
    },
    {
        Make: "HP",
        Model: "Envy",
        Year: 2020,
    }
];
let [firstLap, secondLap] = laptops; //destructuring where we stored varible from array or object
console.log(firstLap, secondLap);
//Question 48:
let prices = [30000, 40000, 50000];
let prices2 = [15000, 70000, 60000];
let combine = [...prices, ...prices2];
let sortIt = combine.sort((a, b) => a - b);
console.log(sortIt);
