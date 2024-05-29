let roundWinner = [];
let buttons = document.querySelectorAll("button");
console.log(buttons);

let Score = document.getElementById("score");
let pc = document.getElementById("pc");
let user = document.getElementById("user");

let computerChoice = function () {
  const possibleChoices = ["Rock", "Paper", "Scissors"];
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
};
let reset = () => {
  roundWinner = [];
  Score.innerText = "Let's start!";
  pc.innerText = 0;
  user.innerText = 0;
};

let winner = function (computerChoice, playerChoice) {
  console.log("The Id of the button we click on: ", playerChoice);
  console.log("The result of the function computerChoice: ", computerChoice);
  let playerChoiceInput = document.getElementById("player-choice");
  let computerChoiceInput = document.getElementById("computer-choice");

  playerChoiceInput.value = playerChoice;
  computerChoiceInput.value = computerChoice;

  if (
    (computerChoice === "Rock" && playerChoice === "Paper") ||
    (computerChoice === "Paper" && playerChoice === "Scissors") ||
    (computerChoice === "Scissors" && playerChoice === "Rock")
  ) {
    roundWinner.push("Player");
  } else if (
    (computerChoice === "Rock" && playerChoice === "Scissors") ||
    (computerChoice === "Paper" && playerChoice === "Rock") ||
    (computerChoice === "Scissors" && playerChoice === "Paper")
  ) {
    roundWinner.push("Computer");
  } else {
    roundWinner.push("Tie");
  }
};

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (this.id === "reset") {
      return reset();
    }
    winner(computerChoice(), this.id);
    console.log(roundWinner);
    let computerWins =
      roundWinner.filter((round) => round === "Computer").length === 3;
    let computerWinsNr = roundWinner.filter(
      (round) => round === "Computer"
    ).length;

    let playerWins =
      roundWinner.filter((round) => round === "Player").length === 3;
    let playerWinsNr = roundWinner.filter((round) => round === "Player").length;

    if (computerWins) {
      Score.innerText = "The computer Wins!";
      console.log("The computer wins!");
      roundWinner = [];
    }
    if (playerWins) {
      Score.innerText = "The player Wins!";
      console.log("The player wins!");
      roundWinner = [];
    }
    pc.innerText = computerWinsNr;
    user.innerText = playerWinsNr;
  });
});
