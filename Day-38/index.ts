//Question 112:

let countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris"); 
countries.set("Japan", "Tokyo");

console.log(countries);


//Question 113:

function getCapitalofCanada(countries: Map<string, string>): void{
    if(countries.has("Canada")){
        console.log(`The capital of Canda is ${countries.get("Canada")}`)
    }
    else{
        console.log("Canada is not in the Map.");
    }
};

console.log(getCapitalofCanada(countries));


//Question 114:

let student = new Map<number,string>();
student.set(101,"john");
student.set(11,"ali");
student.set(121,"javed");
student.set(1221,"ramez");

student.forEach((value, key)=>{
    console.group(`ID number: ${key}, Name: ${value}`)
});

console.log(student);
