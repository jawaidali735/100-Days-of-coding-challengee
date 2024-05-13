//Question 61;


enum category {
    cars,
    trucks,
    bikes
};


console.log(category.cars);



//Question 62:

interface Student{
    names:string
    age:number
    courses:string[]
}

// we use interface to update to typescript what value should be present in an object and what types.

let student:Student = {
    names: "javed, ali",
    age: 22,
    courses: ["chemistry", "physics", "math", "biology"]
} 

console.log(student);


//Question 63:

type Shape = {
    kind: "circle" | "rectangular";
    redius?: number;
    width?: number;
    height?: number;

}

let circle:Shape =  {
    kind: "circle",
    redius: 2
}

let rectangular:Shape = {
    kind: "rectangular",
    width: 3,
    height: 2
}

console.log(circle);
console.log(rectangular);


































