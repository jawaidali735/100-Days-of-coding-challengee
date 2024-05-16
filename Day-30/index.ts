//Question: 88

function nearestNumber(num:number){
    return Math.round(num)
};

console.log(nearestNumber(1.2));  //result: 1
console.log(nearestNumber(1.6)); //result: 2


//Question: 89

function convertNumber(str:string){
   return parseFloat(str);
};

console.log(convertNumber("123"));      // result: 123
console.log(convertNumber("123.123")); // result: 123.123


//Question: 90

function checkNumberOrNot(val:any):boolean {
    return isNaN(val);
};

console.log(checkNumberOrNot("number")); // true
console.log(checkNumberOrNot(123)); // false

