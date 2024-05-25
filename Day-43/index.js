//Question 127:
var _this = this;
//traditional function
var traditionalFunction = function (a, b) {
    return a + b;
};
console.log(traditionalFunction(5, 5));
//arrow function
var arrowFunction = function (a, b) { return a + b; };
console.log(arrowFunction(5, 5));
//Question 128:
var multipleParameters = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (first, second) { return first + second; }, 1);
};
console.log(multipleParameters(1, 2, 3, 5, 6, 7, 8));
//Question 129:
var compireTraditionAndArrow = {
    velue: "This is for check",
    traditional: function () {
        console.log("This is a traditional: ".concat(this.velue));
    },
    arrow: function () { console.log("This is an arrow: ".concat(_this.velue)); } //here you can see it showe a error of undefind
};
compireTraditionAndArrow.traditional();
compireTraditionAndArrow.arrow(); //undefind because arrow function can access a global scope and can't access
//object values if we want to access value which is in object then we have to make arrow function in
//inside block scope in object
