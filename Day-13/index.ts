// Question 37:

function makeShirt(size:string = "Large", text:string = "I love TypeScript"){
    console.log(`Making a ${size} size shirt with the message of ${text}`)
};

makeShirt();
makeShirt("Medium");
makeShirt("small", "I love JavaScript");



//Question 38:


function describCities(text:string, country:string = "Pakistan"){
    console.log(`${text} is in ${country}`)
}

describCities("Karachi");
describCities("Lahore");
describCities("Istanbul", "Turkey");



//Question 39:

function citeNames(city:string, country:string){
    return (`${city}, ${country}`)
}

console.log(citeNames('Lahore','Pakistan'));
console.log(citeNames('Tokyo','Japan'));
console.log(citeNames('Karchi','Pakistan'));