var secretNumber = 9;

var guess = Number(prompt("Guess a number:"));

//console.log(typeof guess);

//console.log(guess.indexOf("yes"));


while (guess !== secretNumber) {
  if (guess > secretNumber) {
    alert("Too high. Guess again!");
  }
  else if (guess < secretNumber) {
    alert("Too low. Guess again!");
  }

  guess = Number(prompt("Guess a number:"));
}

alert("You got it right!");
