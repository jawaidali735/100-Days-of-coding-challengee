//Question 106:
//a leap year is devisible %4 and %400 but not %100


function leapYear(val:number):boolean{
    return(val %4 ===0 && val %100 !==0) || val %400 === 0;
};

console.log(leapYear(2020)); //output:true
console.log(leapYear(1900)); //output:flase
console.log(leapYear(2019));  //output:false
console.log(leapYear(2015));  //output:false

//Question 107:

function numberDivisibleCheck(val:number):boolean{
    return (val %2 ===0 && val %3 ===0);
    //this will check that both 2 and 3 divisible to number.If both can then result true.
    //if one of can and other can not it returns false.
};

console.log(numberDivisibleCheck(6)); //true
console.log(numberDivisibleCheck(12)); //true
console.log(numberDivisibleCheck(14)); //false

//Question 108:

function compireStrings(val:string, val2:string):boolean{
    
    return val.toLowerCase() ===val2.toLowerCase();
};

console.log(compireStrings("ali", "Ali"));     //true
console.log(compireStrings("javed", "jved"));  //false



