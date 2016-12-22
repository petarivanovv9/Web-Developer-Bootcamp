var playerOneButton = document.querySelector("#player1");
var playerTwoButton = document.getElementById("player2");
var resetButton = document.getElementById("reset");

var numInput = document.querySelector("input[type='number']");
var winningScoreDisplay = document.querySelector("p span");

var playerOneDisplay = document.querySelector("#player1Display");
var playerTwoDisplay = document.getElementById("player2Display");

var playerOneScore = 0;
var playerTwoScore = 0;

var gameOver = false;
var winningScore = 5;


playerOneButton.addEventListener("click", function(){
  if (!gameOver){
    playerOneScore++;
    if (playerOneScore === winningScore){
      gameOver = true;
      playerOneDisplay.classList.add("winner");
    }
    playerOneDisplay.textContent = playerOneScore;
  }
});

playerTwoButton.addEventListener("click", function(){
  if (!gameOver){
    playerTwoScore++;
    if (playerTwoScore === winningScore){
      gameOver = true;
      playerTwoDisplay.classList.add("winner");
    }
    playerTwoDisplay.textContent = playerTwoScore;
  }
});

resetButton.addEventListener("click", function(){
  reset();
});

numInput.addEventListener("change", function(){
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

function reset(){
  playerOneScore = 0;
  playerTwoScore = 0;
  gameOver = false;
  playerOneDisplay.textContent = playerOneScore;
  playerTwoDisplay.textContent = playerTwoScore;
  playerOneDisplay.classList.remove("winner");
  playerTwoDisplay.classList.remove("winner");
}
