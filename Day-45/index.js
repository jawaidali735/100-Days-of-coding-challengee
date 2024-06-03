//Question 133:
var person = {
    name: "alice",
    age: 23,
    isStudent: false,
    hobbies: ["reading", "racing", "singing"]
};
console.log(person); //this will print normal print of object.
var toJason = JSON.stringify(person); // this will print string form.
console.log(toJason);
//Question 134:
var person2 = '{"name":"alice","age":23,"isStudent":false,"hobbies":["reading","racing","singing"]}';
var convertToObject = JSON.parse(person2); //we can convert a JSON string into object too.
console.log(convertToObject);
//Question 135:
var converttoIndent = JSON.stringify(person, null, 4);
console.log(converttoIndent);
