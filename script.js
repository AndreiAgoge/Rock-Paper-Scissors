function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}
// console.log(getRandomChoice());

let computerScore = 0;
let playerScore = 0;

function playRound() {
  // console.log("PLAY ROUND");
  let computerChoice = getRandomChoice();
  let playerChoice = getRandomChoice();

  console.log(`Computer choice : ${computerChoice}`);
  console.log(`Player Choice: ${playerChoice}`);

  if (computerChoice === playerChoice) {
    console.log("Tied round! Try again!");
  } else if (computerChoice === "Rock" && playerChoice === "Paper") {
    console.log("Paper beats Rock. Player Wins!");
    playerScore++;
  } else if (computerChoice === "Rock" && playerChoice === "Scissors") {
    console.log("Rock beats Scissors! Computer Wins!");
    computerScore++;
  } else if (computerChoice === "Paper" && playerChoice === "Rock") {
    console.log("Paper beats Rock! Computer Wins!");
    computerScore++;
  } else if (computerChoice === "Paper" && playerChoice === "Scissors") {
    console.log("Scissors beats Paper. Player wins!");
    playerScore++;
  } else if (computerChoice === "Scissors" && playerChoice === "Rock") {
    console.log("Rock beats Scissors. Player Wins!");
    playerScore++;
  } else if (computerChoice === "Scissors" && playerChoice === "Paper") {
    console.log("Scissors beats Paper. Computer Wins");
    computerScore++;
  }
}

function playGame() {
  // console.log("PLAY GAME");
  for (let i = 0; i < 5; i++) {
    setTimeout(playRound, 2000 * i);
  }

  setTimeout(() => {
    // console.log("AFTER ROUNDS");
    if (playerScore > computerScore) {
      console.log("Player wins the game!");
    } else if (playerScore < computerScore) {
      console.log("Computer wins the game!");
    } else {
      console.log("Tie! Try again.");
    }
  }, 10_000);
}

playGame();
