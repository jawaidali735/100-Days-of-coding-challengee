"use strict";
// Question 22:
Object.defineProperty(exports, "__esModule", { value: true });
let placess = ["Turkey", "New York", "UAE", "Karachi", "Swiss"];
console.log(placess[5]);
console.log(placess[4]);
// Question 23: 
let book = "physics";
console.log('is book == "physics", I predict (true)');
console.log(book == "physics");
console.log('is book == "chemistry", I predict (false)');
console.log(book == "chemistry");
book = "chemistry";
console.log('is book == "physics", I predict (false)');
console.log(book == "physics");
console.log('is book !== "physics", I predict (true)');
console.log(book !== "physics");
console.log('is book == "chemistry", I predict (true)');
console.log(book == "chemistry");
book = "Ecnomics";
console.log('is book == "chemistry", I predict (false)');
console.log(book == "chemistry");
console.log('is book !== "Ecnomics", I predict (false)');
console.log(book !== "Ecnomics");
console.log('is book == "Ecnomics", I predict (true)');
console.log(book == "Ecnomics");
book = "Math";
console.log('is book == "Ecnomics", I predict (false)');
console.log(book == "Ecnomics");
console.log('is book == "Math", I predict (true)');
console.log(book == "Math");
// Question 24:
// equality and inequality test  with strings
console.log("car" == "car"); //true
console.log("car" !== "car"); //false
// array equality and inequality test. 
let booksArr = ["Physics", "Math", "Chemistry", "Ecnomics"];
console.log(!booksArr.includes("Ecnomics")); //false
console.log(booksArr.includes("Ecnomics")); //true
// a test of using lowercas funcation.
let myName = "JAWAID ALI";
let myName2 = "jawaid ali";
console.log(myName.toLowerCase() == myName2); //true
console.log(myName == myName2); //false
//numarical tests
let num1 = 10;
let num2 = 5;
let num3 = 10;
console.log(num1 == num3); //true
console.log(num1 !== num2); //false
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num3); //true
console.log(num1 <= num3); //true
// or and & tests
console.log(num1 >= num3 && num1 > num2); //ture
console.log(num1 > num3 || num1 > num2); //tue                
