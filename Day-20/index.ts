//Question 58 


function scores([...moresScores]){
    
    let avarageScores = moresScores.reduce((total:number, current:number)=> total + current , 0)
    return avarageScores / moresScores.length
}

let call = scores([1, 2,3,4, 55, 60, 89]);

console.log(call);

//call the function and where you can call many numbers as per you it will calculates.
let callAgain = scores([1, 2,3,4, 55, 60, 89, 67, 10.3, 20.50, 80]);

console.log(callAgain)


//Question 59:

function adder(addedValue:number){
    return function(number:number){
       return number + addedValue
    }
}

let add5 = adder(5);
console.log(add5(10));
console.log(add5(15));
console.log(add5(20))

//in one line 
const marks = (addvalue:number) =>  (number:number) => {
    return addvalue + number
}

let add5in = marks(5);
console.log(add5in(10));



//Question 60:

let profile = (function(){

    
        let userName = "jawaid";
        let age = 22
       return {
       displayInfo: function(){
            console.log(`you username: ${userName} - your age: ${age}`);
        }}
    
})();


profile.displayInfo()












