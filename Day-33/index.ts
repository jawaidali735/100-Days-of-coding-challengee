//Question 97:

function getCurrentDateFormatted():string{
    let now = new Date;

    let day = String(now.getDate()).padStart(2,'0');

    let month = String(now.getMonth() + 1).padStart(2,'0');

    let year = now.getFullYear();

    return `${day}-${month}-${year}`
};

console.log(getCurrentDateFormatted());

//for time

// function craeatTime():string{
//     let now = new Date;

//     const hours = String(now.getHours()).padStart(2, '0');
//     const mintus = String(now.getMinutes()).padStart(2, '0');
//     const second = String(now.getSeconds()).padStart(2, '0');

//     return `${hours}:${mintus}:${second}`
// };

// console.log(craeatTime());

// function craetedate():string{
//     const now = new Date;

//     const date = String(now.getDate()).padStart(2,'0');
//     const month = String(now.getMonth() +1).padStart(2,'0');
//     const year = String(now.getFullYear());

//     const hours = String(now.getHours()).padStart(2, '0');
//     const mintus = String(now.getMinutes()).padStart(2, '0');
//     const second = String(now.getSeconds()).padStart(2, '0');

// //     return ``
    
//     return `${date}/${month}/${year} time: ${hours}:${mintus}:${second} `
// };

// console.log(craetedate());

//Question 98: 

function findDifference():number{
    const today = new Date;

    const newyear = new Date(today.getFullYear() + 1, 0, 1);

    const difference = today.getTime() - newyear.getTime();

    const days = Math.ceil(difference/(1000*60*60*24));

    return days;
    
};

console.log(findDifference());

//Question 99:

function findBirthdayDate(month:number, day:number):Date{
    const today = new Date;
    const year = today.getFullYear();

    const birthday = new Date(year, month - 1, day);

    if(birthday<today){
        birthday.setFullYear(year + 1);
    };

    return birthday;
};

let nextBirthday = findBirthdayDate(3,10);

console.log(nextBirthday.toLocaleDateString());