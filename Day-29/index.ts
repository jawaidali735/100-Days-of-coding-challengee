//Question 85:

function findPostion(str:string){
    return str.indexOf("code")
};

console.log(findPostion(`i want to do some code for my programe`)); 
//it shows starting point of word "code"


//Question 86:

function checkWordJavescript(str:string){
    return str.includes("javaScript");
} 
console.log(checkWordJavescript("i love javaScript")); //output: true because javsScript is present.

console.log(checkWordJavescript("i love typeScript")); // output: false


//Question 87:

function substractString(str:string){
    return str.substring(0, 5);
};

console.log(substractString("Hello, JavaScript world!"))
//it will show hello because we add end point so hello's end point is ,
// we can also use this substring() method to extract a particular point.
// for example if you want only the words javaScript then you have to add (7,18).