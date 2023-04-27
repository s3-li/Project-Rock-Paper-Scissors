// Array list of items.
const items = ["rock", "paper", "scissors"];


// Create function to generate random item from the list as the computer's choice.
function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)];
}


// Create function to play a single round of Rock Paper Scissors.
const computerSelection = getComputerChoice();
const playerSelection = "rock";

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    return "You win!";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    return "It's a draw.";
  } else {
    return "You lose.";
  }
}
console.log(playRound(playerSelection, computerSelection))