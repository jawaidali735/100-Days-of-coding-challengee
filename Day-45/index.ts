//Question 133:

let person = {
    name: "alice",
    age: 23,
    isStudent: false,
    hobbies:["reading","racing","singing"]
};

console.log(person); //this will print normal print of object.
let toJason = JSON.stringify(person); // this will print string form.

console.log(toJason);


//Question 134:

let person2 = '{"name":"alice","age":23,"isStudent":false,"hobbies":["reading","racing","singing"]}';

let convertToObject = JSON.parse(person2);  //we can convert a JSON string into object too.

console.log(convertToObject); 


//Question 135:

let converttoIndent = JSON.stringify(person, null, 4);

console.log(converttoIndent);