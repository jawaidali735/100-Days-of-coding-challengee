//Question 121:
for (var i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    ;
    console.log(i);
}
;
//here 5 will be skip from the list of loop;
//Question 122:
var count = 10;
while (count > 0) {
    if (count === 5) {
        break;
    }
    ;
    count--;
    console.log(count);
}
;
//Break will stop loop when it reaches in 5
//Question 123:
function findVowel(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("First vowel found: ".concat(char));
            break;
        }
        console.log(char);
    }
}
findVowel("javed");
