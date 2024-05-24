//Question 112:
var countries = new Map();
countries.set("USA", "Washington, D.C.");
countries.set("France", "Paris");
countries.set("Japan", "Tokyo");
console.log(countries);
//Question 113:
function getCapitalofCanada(countries) {
    if (countries.has("Canada")) {
        console.log("The capital of Canda is ".concat(countries.get("Canada")));
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
;
console.log(getCapitalofCanada(countries));
//Question 114:
var student = new Map();
student.set(101, "john");
student.set(11, "ali");
student.set(121, "javed");
student.set(1221, "ramez");
student.forEach(function (value, key) {
    console.group("ID number: ".concat(key, ", Name: ").concat(value));
});
console.log(student);
