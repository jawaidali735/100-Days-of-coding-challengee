"use strict";
// Question 31:
Object.defineProperty(exports, "__esModule", { value: true });
let userNamesArr = ["Admin", "Ali", "Mubeen", "Areab"];
if (userNamesArr.length === 0) {
    console.log("we need to fined some user's");
}
else {
    userNamesArr.forEach(users => {
        if (users === "Admin") {
            console.log(`Hellow ${users}, would you like to know some report.`);
        }
        else {
            console.log(`Hellow ${users}, thanks for login.`);
        }
    });
}
// Here users are removed now ensure the empty array.
userNamesArr = [];
if (userNamesArr.length === 0) {
    console.log("we need to fined some user's");
}
// Question 32:
let currentUsers = ["admin", "Ali", "Mubeen", "areab"];
let newUsers = ["ADMIN", "javed", "rimsha", "rabil"];
newUsers.forEach((users) => {
    let userNameLower = users.toLowerCase();
    if (currentUsers.some(nUser => nUser.toLowerCase() == userNameLower)) {
        console.log(`${users} you will need to enter a new username`);
    }
    else {
        console.log(`Username ${users} is available.`);
    }
});
//  we can also do this with the using of map instead of some method both methods are for array
// some(): method checks every elements and if any elments exist on array it returns true vaue
// map(): This method returns a new array as original array.
newUsers.forEach((users) => {
    let userNameLower = users.toLowerCase();
    if (currentUsers.map(nUser => nUser.toLowerCase()).includes(userNameLower)) {
        console.log(`${users} you will need to enter a new username`);
    }
    else {
        console.log(`Username ${users} is available.`);
    }
});
// Question 33:
let oridnalNumbers = [1, 2, 3, 4, 5, , 6, 7, 8, 9];
oridnalNumbers.forEach((users) => {
    if (users == 1) {
        console.log(`${users}st`);
    }
    else if (users == 2) {
        console.log(`${users}nd`);
    }
    else if (users == 3) {
        console.log(`${users}rd`);
    }
    else {
        console.log(`${users}th`);
    }
});
