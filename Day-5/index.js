"use strict";
// quesion 13:
Object.defineProperty(exports, "__esModule", { value: true });
let myFavoritTransport = ['bmw car', 'harley david bike', 'honda civic car'];
myFavoritTransport.forEach((transport) => {
    console.log(`i would like to have a ${transport}`);
});
// we can also do this with another way
let myFavoritTransport1 = [];
myFavoritTransport1.push(["bmw", "car"]);
myFavoritTransport1.push(["hareley david", "bike"]);
myFavoritTransport1.push(["honda civic", "car"]);
myFavoritTransport1.forEach(([transport, brand]) => console.log(`I would like to have a ${brand} ${transport}.`));
// Question 14:
let guestList = ["aamir", "mubben", "areeb"];
for (let guest of guestList) {
    console.log(`Hello ${guest}, I am invaitting you for dinner tonight`);
}
// question 15:
console.log('one of our friend won;t join us tonight');
guestList.splice(2, 1, "ali");
for (let guest of guestList) {
    console.log(`Hello ${guest}, I am invaitting you for dinner tonight`);
}
// let's solve it with another way.
let guestList2 = ["aamir", "mubben", "areeb"];
let notAttending = "areeb";
let newAttending = "ali";
console.log(`Mr, ${notAttending} can't make it to dinner`);
guestList2[guestList2.indexOf(notAttending)] = newAttending;
for (let guest of guestList2) {
    console.log(`Hello ${guest}, I am invaitting you for dinner tonight`);
}
