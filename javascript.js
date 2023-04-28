// Array list of items.
const items = ["rock", "paper", "scissors"];


// Create function to generate random item from the list as the computer's choice.
function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)];
}


// Create function to play a single round of Rock Paper Scissors.
const computerSelection = getComputerChoice();
const playerSelection = "";

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors.";
  } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
    return "You win! Paper beats rock.";
  } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper.";
  } else if (playerSelection.toLowerCase() === computerSelection) {
    return `It's a draw, you both picked ${computerSelection}`;
  } else {
    return `Sorry, you lose, ${computerSelection} beats ${playerSelection}`;
  }
}


// Create a new function called game(). Use the previous functions inside this one.
function game() {
  const playerSelection = prompt("Pick rock, paper, or scissors to play")
  function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
      return "You win! Rock beats scissors.";
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
      return "You win! Paper beats rock.";
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
      return "You win! Scissors beats paper.";
    } else if (playerSelection.toLowerCase() === computerSelection) {
      return `It's a draw, you both picked ${computerSelection}`;
    } else {
      return `Sorry, you lose, ${computerSelection} beats ${playerSelection}`;
    }
  }
  return playRound(playerSelection, computerSelection)
}
console.log(game());