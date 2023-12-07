function guessTheNum(n) {
    const randNumb = Math.floor(Math.random() * 50 + 1);

    if (n === randNumb) {
        return `Congratulations! You've guessed the right number ${randNumb}!`;
    } else if (n > randNumb) {
        return `${n} is too high! Try again.`;
    } else {
        return `${n} is too low! Try again.`;
    }
}

const userGuess = 29;
console.log(guessTheNum(userGuess));