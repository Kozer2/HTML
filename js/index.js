/* Creating my first JS function. It will ask for name and the current time and return a welcome message based on their name and the time */

var myFirstJSFunction = function() {

    var userName = prompt('Please enter your first name: ');
    var today = new Date();
    var hourNow = today.getHours();
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
document.getElementById('firstFunction').innerHTML = myFirstJSFunction();


/* Going to write a stretch goal function that takes a number and word and returns that word as many times as the number was entered */
var stretchGoal = function() {
    var stretchGoal = prompt('Now for a stretch goal, give me a number between 1 and 10: ');
    var string1 = prompt('Give me a short word: ');
    var counter = 1;
    var string2 = '';
    while (counter <= stretchGoal) {
     
     string2 += string1 + '<br>'
     counter++;
    }
    return (string2)
    
    }
document.getElementById('extraGoal').innerHTML = stretchGoal();