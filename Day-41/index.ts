//Question 121:

for(let i=1; i<=10; i++){
    if(i === 5){
        continue;
    };
    console.log(i);
};

//here 5 will be skip from the list of loop;


//Question 122:

let count:number = 10;

while(count > 0){
    if(count === 5){
        break;
    };
    count--;
    console.log(count);
};

//Break will stop loop when it reaches in 5

//Question 123:

function findVowel(str:string){
    let vowels:string = "aeiouAEIOU"
    for(let char of str){
        if(vowels.includes(char)){
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char)
    }
    
}
findVowel("javed");


