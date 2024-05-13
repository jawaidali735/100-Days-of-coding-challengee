//Question 76:

function twoNumber(num1:number, num2:number):number{

    return num1 + num2
}

let add = twoNumber(2,4);

console.log(add);


//Question 77:

function userName(name:string = "anonymous"){
    console.log(`Hello! ${name}`);
}

//with provided argument.
userName("javed ali");           //result: javed ali

//Without nad now the default parameter work.
userName();                      // result: anonymous




//Question 78: 


//with function keyword declaration.

function squar(number:number) {
    return number*number
}

console.log(squar(2));                 // output: 4


//with experssion declaration which is stored in a variable.

let squaring = (number2:number)=>{
     return number2*number2
}

let squaringStored = squaring(8);       

console.log(squaringStored);             //output: 64




