/* Creating my first JS function. It will ask for name and the current time and return a welcome message based on their name and the time */

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

/* Going to write a stretch goal function that takes a number and word and returns that word as many times as the number was entered */
function stretchGoal() {
var stretchGoal = prompt('Now for a stretch goal, give me a number between 1 and 10: ')
var string1 = prompt('Give me a short word: ')
var counter = 1
var string2 = []
while (counter <= stretchGoal) {
 
 string2.push(string1)
 counter++
}
return (string2)

}