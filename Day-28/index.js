// Question 82:
function findLength(str) {
    var length = str.length;
    return length;
}
;
console.log(findLength("javed")); //output: 5
//using of .length we can find characters of any string and length of any array.
//Question 83:
function uppercaseAndlowercase(str) {
    var uppercasse = str.toUpperCase(); // for uppercase 
    console.log(uppercasse);
    var lowercsse = str.toLowerCase(); //for lowercase 
    console.log(lowercsse);
}
;
uppercaseAndlowercase("javed"); // output: JAVED and javed
//Question 84:
function replaceString(str) {
    return str.replace(/javaScript/i, "typeScript");
    // with the help of .replace method we can repalce word.
    // and you must have noticed that there is a /i, this means that change only first occurrence not all same words. and if add something like this /javaScript/g now this will change all similar words.
}
console.log(replaceString("I love javaScript and also javaScript"));
//    output: I love typesScript and also javaScript
