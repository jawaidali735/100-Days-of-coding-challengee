//Question 67:


function number(number1:string, number2:number):number{
    
    //here we have used number NumberConstructor to change a string into number.
    
    return Number(number1) + number2
};

console.log(number("5", 2));



//Question 68:

function roundDecimals(num1:number, num2: number):number{
    return Math.round((num1 * num2) *100)/100;
}

console.log(roundDecimals(0.2, 0.3));



//Question 69:


function quotientAndremaimder(divid:number, divisor:number): {quotient:number; remainder:number}{
    let quotient = Math.floor(divid/divisor);
    let remainder = divid % divisor;
    
    return {quotient, remainder};
    
};

console.log(quotientAndremaimder(10, 3));


