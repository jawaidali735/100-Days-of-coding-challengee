//Question: 91

let fovariteFruits:string[] = ["apple","mango","grapes"];

fovariteFruits.push("banana");    // push add new frutis to the list at the end.

console.log(fovariteFruits);


//Question: 92

function removelast(){
    return fovariteFruits.pop()

}
console.log(removelast());
console.log(fovariteFruits);

//let's do this with Generic Function

function removeLastElement<g>(value:g[]): g | undefined {
    return value.pop();
};

let fruits:string[] = ["apple","banana","orange","cherry"];
console.log(removeLastElement(fruits));  // output: cherry
console.log(fruits);        // output: ["apple","banana","orange"] 

let numbers:number[] = [1, 2, 3, 4];   
console.log(removeLastElement(numbers));  // output: 4
console.log(numbers);              //[1,2,3];

//Note: With the help of generic function we can add any types in function. You can use the same function with different types without rewriting it.

//Question 93:

let fruitsAdd:string[] = ["apple","banana","orange","cherry"];

function addFrouts(val:string[]){
    let indexIt = val.indexOf("banana")
    if(indexIt !== -1) val[indexIt] = "mango"
};

let replace = addFrouts(fruitsAdd);

console.log(fruitsAdd);




