const randomNum = 25; 

function guessGame() {
  let guess;

  while (true) {
    guess = parseInt(prompt("Please guess the number between 1 and 50:"));

    if (isNaN(guess)) {
      alert("Not a valid number. Please enter a valid number.");
      continue;
    }

    if (guess === randomNum) {
      alert(`Congratulations! You've guessed the number ${randomNum} correctly.`);
      break;
    } else if (guess < randomNum) {
      alert("Too low! Please, try again.");
    } else {
      alert("Too high! Please try again.");
    }
  }
}

guessGame();
