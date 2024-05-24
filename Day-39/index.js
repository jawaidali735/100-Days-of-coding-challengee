//Question 115:
function weekDays(day) {
    switch (day) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
            break;
    }
}
;
weekDays(5);
//Question 116:
function logSession(month) {
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Summer");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Spring");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Fall");
            break;
        default:
            console.log("month not valid");
            break;
    }
    ;
}
;
logSession(6);
// Question 117:
function logMenu(menu) {
    switch (menu) {
        case "Home":
            console.log("Navigate to home");
            break;
        case "About":
            console.log("Navigate to about");
            break;
        case "Contact Us":
            console.log("Navigate to contact us page");
            break;
        default:
            console.log("Page not found");
            break;
    }
    ;
}
;
logMenu("Privacy Policy");
