//Question 124:
var obj = {
    name: "javed ali",
    age: 23,
    getName: function () {
        return this.name;
    }
};
console.log(obj.getName());
//Question 125:
var calculate = {
    num1: 1,
    num2: 2,
    cal: function () {
        return this.num1 + this.num2;
    }
};
console.log(calculate.cal());
//Question 126:
var object = {
    name: "javed",
    outer: function () {
        var _this = this;
        console.log(this.name);
        var inner = function () {
            console.log(_this.name); //we can make the nested function with healp of arrow function.
        };
        inner();
    }
};
object.outer();
