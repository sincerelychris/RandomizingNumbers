const prompt = require("prompt-sync")();

const target = 10 + Math.round(Math.random() * 100);

let guesses = 0;

while(true) {
    const guess = Number(prompt("guess the number (0-100): "));
    if (guess > target) {
        console.log("Your guess is too high.");
    } else if (guess < target) {
        console.log("Your guess is too low.");
    } else {
        console.log("You guessed it!");
        break;
    }
}
