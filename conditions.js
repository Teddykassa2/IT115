console.log("Hello World");
// to check if the html and js is connected
let randomNumber = Math.random();
// setting or assigning  a variable
console.log(randomNumber);

// if (randomNumber < 0.5) {
// to show a random number in the consol
//     Console.log("hello teddy");
//     console.log(randomNumber);
// }
// to show hello teddy is the random number is less than 0.5
// if (randomNumber >= 0.5) {
// 
//     console.log('RandomNumber is greater than 0.5');
//     console.log(randomNumber);
// }
// to show RandomNumber is greater than 0.5 if the random number is greater or equal to 0.5

// const dayOfWeek = 'Saturday';

// if (dayOfWeek === 'Monday') {

//     console.log('This is Monday');
    
// }  else if (dayOfWeek === 'Thursday'){

//     console.log("this is Thursday");

// } else if (dayOfWeek === 'Saturday') {

//     console.log("Hooray, today is Saturday");

// }
/*

const age = prompt('Enter An Age')
// declaired the age
if (age < 5) {

    console.log("You are less than 5!");
// if age is less than 5 it will show you are less than 5
} else if (age < 10) {

    console.log("still too young!");
// if age is less than 10 the console will show still too young
} else if (age >= 16) {
    
    console.log("you are able to drive!");
    // if age is greater or equal to 16 the console will show you are able to drive
}

const expr = 'papayas'; 

switch (expr) {

    case 'Oranges':
        console.log("Orange are $0.59 a pound");
        break;
    case 'Mangoes':
        console.log("Hello Mangos!");
        break;
    default:
        console.log("Sorry, we are out of your asked item.")
}

const password = promp("Please Enter A New Password");

if (password.length >= 6) {
    // Nested condition
    if (password.indexOf(' ') === -1) {
        console.log("Valid Password")
    }else {
        console.log("Password can't have spaces")
    }

    
} else { 
    console.log("Password is too short")

}


function singSong() {
    console.log("DO");
    console.log("RE");
    console.log("MI");
    
}


singSong()
singSong()
singSong()
*/
function greet(firstName) {
    // 
    console.log(`Hey There, ${firstName}`)

}
greet('Teddy')

function greet1(firstName,lastName){

    console.log(`Hey There, ${firstName} ${lastName[0]}.`)

}
 greet1('Teddy','Kassa')