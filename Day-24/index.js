"use strict";
//Question 70:
Object.defineProperty(exports, "__esModule", { value: true });
function loop() {
    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }
}
loop();
//Question 71:
let myName = "javed ali";
myName = "mubean";
console.log(myName);
const myNumber = 10;
// try {
//     myNumber = 5;
// } catch(error){
//     console.log(`Cannot assign to 'myNumber' because it is a constant.`)
// };
//Question 72: 
function ages() {
    let age1 = 22;
    const age2 = 2;
    console.log(age1);
    console.log(age2);
}
;
ages();
// try{
//     console.log(age1);  // it wont work beause the age1 is not accesable in here.
// }catch(error){
//     console.log(`Cannot find name 'age1'.`);
// }
// try{
//     console.log(age2);  // it also wont work beause the age2 is not accesable in here.
// }catch(error){
//     console.log(`Cannot find name 'age1'.`);
// }
//if we do something like this 
let myage = 22;
const myage2 = 23;
function myages() {
    console.log(myage);
    console.log(myage2);
    //here we can access this becuse now varible decalered on global scope.
}
myages();
