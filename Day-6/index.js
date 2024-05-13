"use strict";
// Question 16:
Object.defineProperty(exports, "__esModule", { value: true });
let guestsList = ["aamir", "mubben", "ali"];
console.log("Hello everyone, I have just found a bigger table for dinner so i am invaitting more friends.");
guestsList.unshift("elon musk");
let middle = "bill gates";
let middleName = Math.floor(guestsList.length / 2);
guestsList.splice(middleName, 0, middle);
guestsList.push("tesla sahab");
guestsList.forEach((guests) => {
    console.log(`Hello ${guests}, I am inivaitting you for dinner`);
});
// Question 17:
console.log(`bad news table won't arrived at the time so i am invaitting only two friends`);
for (let i = guestsList.length - 1; i >= 2; i--) {
    console.log(`Sorry ${guestsList[i]}, I am not invaitting you to dinner`);
    guestsList.pop();
}
;
guestsList.forEach((guests) => {
    console.log(`Hello ${guests}, I am inivaitting you for dinner`);
});
guestsList.splice(0, guestsList.length);
console.log(guestsList);
// Question 18:
let favoritePlaces = ["turkey", "UAE", "swiss", "USA", "Canada"];
console.log(favoritePlaces); //original
console.log([...favoritePlaces].sort()); //alphabetical
console.log(favoritePlaces); // still originsl
console.log([...favoritePlaces].sort().reverse()); // reversed
console.log(favoritePlaces); //still orignal
favoritePlaces.reverse(); //originsl has been changed now and it's reversed
console.log(favoritePlaces);
favoritePlaces.reverse(); //reversed again to look original but its not original array
console.log(favoritePlaces);
favoritePlaces.sort();
console.log(favoritePlaces); //alphabheticl
favoritePlaces.sort().reverse(); // alphatbhetical reversed but its not original array.
console.log(favoritePlaces);
