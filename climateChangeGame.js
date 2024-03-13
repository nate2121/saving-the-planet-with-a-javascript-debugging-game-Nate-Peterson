const prompt = require("prompt-sync")();

// Welcome statement for  the users.
console.log('Welcome to the Climate Change Awareness Game!');

// intialize the variable score to zero
let score = 0;

//  Function for varrous decision scenarios and display the question
function decisionScenario(question, options, correctAnswerIndex) {
    console.log(question);

    // the loop was not displaying the function corectly, the const j was not necessary  so I removed it. and fix the display statement 
    //iterate through all options and display the options 
    for (let i = 0; i < options.length; i++) {
        console.log(`${i+1}. ${options[i]}`);
    }

    // let the player or users  enter their choice.
    let playerAnswer = parseInt(prompt("Enter your choice (number):")) - 1;

    // there was a '!' within the loop that was interfering with the interation 
    //  so it has been removed, and cause the score to increment if answer is correct. and now the code
    //check if the player choice is correct and if not show the correst response
    if (playerAnswer === correctAnswerIndex) {
        console.log('Correct! You made an environment-friendly decision. +1 point.');
        score++;
    } else {
        //change the feedback option to the corret one 
        console.log(`Incorrect! The better choice would be: ${options[correctAnswerFeedbackIndex]}`);
    }
}
// I corrected the index of the display options to start from 1 instead of 0
//  Questions for the game from 1-5
decisionScenario(
    'You are going to the supermarket. How do you choose to carry your groceries?',
    ['Plastic bags provided by the store', 'Bring your own reusable bags', 'Carry them without any bag'],
    1,
    1
);

decisionScenario(
    '\nYou are buying a new car. Which type do you choose?',
    ['A gasoline-powered car', 'A hybrid car', 'An electric car'],
    2,
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center'],
    2,
    2
);

decisionScenario(
    '\nYou want to dispose of old electronics. What do you do?',
    ['Throw them in the regular trash', 'Sell or donate them', 'Take them to an e-waste recycling center', 'Refurbish and continue using them'],
    2,
    3
);

decisionScenario(
    '\nHow do you prefer to eat your meals?',
    ['Takeout from restaurants in disposable containers', 'Cooked at home with locally sourced ingredients', 'Processed and packaged meals', 'Home cooked meals with ingredients from your own garden'],
    1,
    3
);

// Show the player final score  after all questions have been answered.
console.log(`\nGame Over! Your total score is: ${score}. Thank you for playing.\n`);
