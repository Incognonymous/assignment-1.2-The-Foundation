/**
 * Function to play the Craps game
 */
function playCraps() {
    // Generate two random numbers between 1 and 6
    var die1 = Math.floor(Math.random() * 6) + 1;
    var die2 = Math.floor(Math.random() * 6) + 1;
    var sum = die1 + die2; // Calculate the sum of the two dice

    // Update the dice images based on the random numbers
    document.getElementById('dice1').src = 'dice' + die1 + '.png';
    document.getElementById('dice2').src = 'dice' + die2 + '.png';

    // Check for game conditions
    if (sum === 7 || sum === 11) {
        // If sum is 7 or 11, player loses
        document.getElementById('gameResult').innerHTML = "CRAPS – you lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        // If dice are doubles and even, player wins
        document.getElementById('gameResult').innerHTML = "You won!";
    } else {
        // Any other case, it's a push
        document.getElementById('gameResult').innerHTML = "You pushed!";
    }
}

/**
 * Sample function that takes a parameter and outputs results
 * @param {number} input - The input value
 */
function sampleFunction(input) {
    // Simple calculation using the input value
    var result = input * 2;

    // Output the result
    console.log("The result is: " + result);
    // This function can be expanded based on specific requirements
}
