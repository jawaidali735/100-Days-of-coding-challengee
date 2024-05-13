//Question 79: 

let car = {
    make: "bmw",
    model: "i8",
    year: 2016
}

console.log(car.model)


//Question 80:

interface car{
    make:string;
    model:string;
    year:number;
    [key:string]: any
}

let car2:car = {
    make: "bmw",
    model: "i8",
    year: 2016
}

car2["color"] = "black"

car2.year = 2015;     //update the value

console.log(car2)

//Note: I have used here interface to add new value but we can also add new value with usinf of car.color = "black".

car2.color2 = "blue";
console.log(car2)            

// here you will see color2 property in  car2 object. because i have added color2 to the car2 object.



//Question 81:


function properties(obj:any){
    for(let property in obj){

        console.log(`${property}: ${obj[property]}`)
    }
};

properties({ make: "BMW", model: "i8", year: 2016, color: "black" });


