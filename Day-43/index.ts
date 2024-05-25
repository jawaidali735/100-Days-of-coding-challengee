//Question 127:

//traditional function

const traditionalFunction = function(a:number,b:number){
    return a + b;
};
console.log(traditionalFunction(5,5));

//arrow function

const arrowFunction = (a:number,b:number)=> a + b;
console.log(arrowFunction(5,5)); 


//Question 128:

const multipleParameters = (...numbers:number[])=>
numbers.reduce((first,second)=> first + second, 1);

console.log(multipleParameters(1,2,3,5,6,7,8));


//Question 129:


let compireTraditionAndArrow = {
    velue: "This is for check",
    traditional: function(){
        console.log(`This is a traditional: ${this.velue}`);
    },

    arrow: ()=> {console.log(`This is an arrow: ${this.velue}`)} //here you can see it showe a error of undefind
};

compireTraditionAndArrow.traditional();

compireTraditionAndArrow.arrow(); //undefind because arrow function can access a global scope and can't access

//object values if we want to access value which is in object then we have to make arrow function in
//inside block scope in object


