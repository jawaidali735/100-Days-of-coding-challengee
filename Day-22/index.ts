//Question 64

function combine (text:string, number:number):string {
       return  text + number
}

let cominineIt = combine("age: ", 22);

console.log(cominineIt);


//Question 65;


function reminder(num1:number , num2:number):number {
    return num1 % num2
}

console.log(reminder(5,2));




//Question 66:

// tried another way to show both true then answer will be true and if one of them is false then answer will be false.

function trueFalse(){
    let num1 = 5;
    let num2 = 6;
    console.log(num1 < num2 && num2 < num1);
}

trueFalse()



//boolean parameters

function checkBothTrueandFalse(val1:boolean, val2:boolean):boolean{
    return val1 && val2
}

console.log(checkBothTrueandFalse(true, false));

