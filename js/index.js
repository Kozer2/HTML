function myFirstJSFunction() {

var userName = prompt('Please enter your first name: ');
var hourNow = prompt('What is the current time? Please use 0-23 ')
var greeting;

if (hourNow >= 18){
    greeting = 'Good Evening'
} else if (hourNow >= 12 ) {
    greeting = 'Good Afternoon'
} else if (hourNow >= 0 ) {
    greeting = 'Good Morning'
} else {
    greeting = 'Welcome'
}



return greeting + " " + userName + "!";
}
