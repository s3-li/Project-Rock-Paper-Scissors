// List random items.
const items = ["Rock", "Paper", "Scissors"]

// Create function to generate random item as the computer's choice.
function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)];
}

// Create function to play a single round of Rock Paper Scissors.
const computerSelection = getComputerChoice();
const playerSelection = "rock"

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "Paper") {
  return "Sorry, you lose this time. Paper beats Rock."
  } else if (playerSelection === "rock" && computerSelection === "Scissors") {
  return "Congratulations, you win! Rock beats Scissors."
  } else if (playerSelection === "rock" && computerSelection === "Rock") {
  return "It's a Draw!"
  }
}

console.log(playRound(playerSelection, computerSelection));