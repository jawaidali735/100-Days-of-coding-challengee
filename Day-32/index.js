//Question 94:
var words = ["CSS", "HTML", "JavaScript", "TypeScript"];
var countLength = words.map(function (word) { return word.length; });
console.log(countLength);
//Question: 95
function filterFunction(val) {
    return val.filter(function (val) { return val > 10; });
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(filterFunction(arr)); // [11,12,13,14,15];
//Question:96:
var numbers = [5, 6, 8, 12, 15];
var sum = numbers.reduce(function (first, second) { return first + second; });
console.log(sum);
