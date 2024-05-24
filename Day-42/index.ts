//Question 124:

let obj ={
    name: "javed ali",
    age:23,
    getName: function(){
        return this.name 
    }
};

console.log(obj.getName());

//Question 125:

let calculate = {
    num1: 1,
    num2: 2,
    cal: function(){
        return this.num1 + this.num2
    }
};

console.log(calculate.cal());

//Question 126:

let object={
    name:"javed",
    outer: function(){
        console.log(this.name);

        let inner= ()=> {
            console.log(this.name);   //we can make the nested function with healp of arrow function.
        };
        inner()
    }
    
};

object.outer();




