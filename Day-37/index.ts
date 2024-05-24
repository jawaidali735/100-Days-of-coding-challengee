//Question 109:


let currentTime = new Date();

if(currentTime.getHours()< 12){
    console.log("Good Morning")
};


//Question 110:

function scores(score:number):string{
    if(score >= 90){
        return 'A'
    }
    else if(score >= 80){
        return 'B'
    }
    else if(score >= 70){
        return 'C';
    }
    else if(score >= 60){
        return 'D';
    }
    else {
        return 'F'
    }
};

console.log(scores(90));
console.log(scores(80));
console.log(scores(70));
console.log(scores(60));


//Question 111:

function age(val:number):string{
    if(val <= 13){
        return 'child'
    }
    else if(val > 13 && val <19){
        return 'tenager'
    }
    else {
        return 'adult'
    }

};

console.log(age(12));
console.log(age(13));
console.log(age(15));
console.log(age(19));
console.log(age(25));