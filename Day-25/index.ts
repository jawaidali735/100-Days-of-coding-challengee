//Question 73:

function updatedValue(){
    let name = "javed ali";
    console.log(name);

    //updated value
    name = "areab"
    console.log(name);
    
};

updatedValue();


//Question 74;

let a = 5, b =10;

console.log(a, b); //output: a is 5 | b is 10

let newA = a
a = b
b = newA
console.log(a, b); //output: a is 10 | b is 5




//Question 75:





function operators(val:number){

    let x = 4;

    x += val
    console.log(x);

    x -= val
    console.log(x);
    
    x *= val
    console.log(x);
    
    x /= val
    console.log(x);
};


operators(2);