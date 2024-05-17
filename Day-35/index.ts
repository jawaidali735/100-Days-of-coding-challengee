//Question 103:

function randomTrueOrFalse():boolean{
    return Math.random() < 0.5;
};
console.log(randomTrueOrFalse());

//Question 104:

function randomColorCode():string{
    return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6,'0');
};

console.log(randomColorCode());

//Question 105:

function diceRoll():number{
    return Math.floor(Math.random() * 6) + 1;
};
console.log(diceRoll());