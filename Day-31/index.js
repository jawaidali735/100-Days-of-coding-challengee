//Question: 91
var fovariteFruits = ["apple", "mango", "grapes"];
fovariteFruits.push("banana"); // push add new frutis to the list at the end.
console.log(fovariteFruits);
//Question: 92
function removelast() {
    return fovariteFruits.pop();
}
console.log(removelast());
console.log(fovariteFruits);
//let's do this with Generic Function
function removeLastElement(value) {
    return value.pop();
}
;
var fruits = ["apple", "banana", "orange", "cherry"];
console.log(removeLastElement(fruits)); // output: cherry
console.log(fruits); // output: ["apple","banana","orange"] 
var numbers = [1, 2, 3, 4];
console.log(removeLastElement(numbers)); // output: 4
console.log(numbers); //[1,2,3];
//Note: With the help of generic function we can add any types in function. You can use the same function with different types without rewriting it.
//Question 93:
var fruitsAdd = ["apple", "banana", "orange", "cherry"];
function addFrouts(val) {
    var indexIt = val.indexOf("banana");
    if (indexIt !== -1)
        val[indexIt] = "mango";
}
;
var replace = addFrouts(fruitsAdd);
console.log(fruitsAdd);
