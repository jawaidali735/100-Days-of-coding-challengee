//Question 85:
function findPostion(str) {
    return str.indexOf("code");
}
;
console.log(findPostion("i want to do some code for my programe"));
//it shows starting point of word "code"
//Question 86:
function checkWordJavescript(str) {
    return str.includes("javaScript");
}
console.log(checkWordJavescript("i love javaScript")); //output: true because javsScript is present.
console.log(checkWordJavescript("i love typeScript")); // output: false
//Question 87:
function substractString(str) {
    return str.substring(0, 5);
}
;
console.log(substractString("Hello, JavaScript world!"));
