var secretNumber = 9;

var guess = Number(prompt("Guess a number:"));

//console.log(typeof guess);

if (guess === secretNumber) {
  alert("You got it right!");
}
else if (guess > secretNumber) {
  alert("Too high. Guess again!");
}
else {
  alert("Too low. Guess again!");
}
