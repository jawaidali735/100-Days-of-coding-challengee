//Question 139:

// if -> is a resereved keywords

let count = 4

if(count > 0 ){
    console.log("welcome");
};

// let, const, var they are also reserved keywords

let myName = "javed";
const age = 23;
var isAlive = true;

//Function and return is a resevered keyword:

function add (a:number,b:number){
    return a + b
};
console.log(add(2,2));


//Question 140:

// function let(a:number, b:number){
//     return a +b
// } 
// as you can see the function name is let
//and let is a reserved keywords we can not use it as name of function.
//error: Identifier expected. 'let' is a reserved word in strict mode. Modules are automatically in strict mode.

// const if = "javed"; this will shows a syntax error

//here we used if as name of variable which is giving us a error because this is a reserved keyword.

//Question 141:


  async function fetchData() {
    // Assuming fetchSomething returns a Promise
    const data = await fetchSomething();
    console.log(data);
    // The 'await' keyword pauses the execution until the Promise settles, and then resumes with the resolved value.
  }
  
  console.log(
    "The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion."
  );


