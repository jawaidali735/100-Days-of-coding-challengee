// Question 49:

function rest(...hobbies:string[]){
        
    
    hobbies.forEach((hobby)=>{
                console.log(`You are realy like ${hobby}`)
        });
        
}

rest("reading", "horse riding", "racing");




//Question 50:

let idealDay = `My ideal Day:
                
in morining: i wake up at 9:00 am.
in afternoon comes to some works. 
go for walk or any other activity.`

console.log(idealDay);


//question 51:

//function that we use usual or original function
function calculateArea(width:number, height:number):number {
        return width * height
}

let calculate = calculateArea(6, 7);
console.log(calculate);


//factoratd function with arrow


let calculateAreaWithArrow = (width:number, height:number):number => 
            width * height

console.log(calculateAreaWithArrow(6, 7 ));
