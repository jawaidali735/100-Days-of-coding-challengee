//Question 55:

let array = [1,2,3,4,5,6,7,8,9]


//we use map function because this map function creates new array and where we can access each elements of an array.
let doubleNumber = array.map((number)=> number * 2);

console.log(doubleNumber);



//Question 56:

let mixedItems = [2, "cars", true, "BMW", "audi", false, 4];

//we use filter function for access element from an array that passed a certain conditions if the condition true it will return true. so in this case we had a mixed array where all types of elements contained so with using filter and we added new array only for strings.

let onlyStrings = mixedItems.filter((items)=> typeof items === "string");

console.log(onlyStrings);



//Question 57: 

//common usage.

let grades = [88, 94, 72, 99, 53, 77];

let sum = 0;

grades.forEach((grade)=>{
    sum += grade
})

let sumIt = sum/grades.length

console.log(sumIt);


//with the use of reduce method

let gradesMakrs = [12, 25, 45, 60, 55];

let avarage = gradesMakrs.reduce((accumulator, intialvalue) => accumulator + intialvalue, 0 ) /gradesMakrs.length

console.log(avarage);



//map will provide new array.
//filter it will also creaates new array but it will works with conditional.
// reduce also uses for array it will do calculations and it takes two parameters/ 


