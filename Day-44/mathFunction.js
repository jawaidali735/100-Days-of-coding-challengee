"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    ;
    person.prototype.great = function () {
        console.log("Hello, my name is ".concat(this.name, " and my age is ").concat(this.age));
    };
    ;
    return person;
}());
exports.person = person;
;
