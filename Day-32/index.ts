//Question 94:

let words:string[] = ["CSS", "HTML","JavaScript","TypeScript"];

let countLength = words.map((word)=> word.length);

console.log(countLength);

//Question: 95

function filterFunction(val:number[]):number[]{
    return val.filter((val)=> val > 10);
}

let arr:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

console.log(filterFunction(arr));  // [11,12,13,14,15];


//Question:96:

let numbers:number[] = [5, 6, 8 ,12, 15];

let sum:number = numbers.reduce((first, second)=> first + second);

console.log(sum); // 46
