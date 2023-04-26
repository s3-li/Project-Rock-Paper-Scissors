// List random items.
const items = ["Rock", "Paper", "Scissors"]

// Create function to generate random item as the computer's choice.
function getComputerChoice() {
  return items[Math.floor(Math.random()*items.length)];
}
console.log(getComputerChoice(items))

