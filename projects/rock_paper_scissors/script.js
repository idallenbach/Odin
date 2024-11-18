// create global variables
let random = Math.floor(Math.random() * 3);
let choice = ["Rock", "Paper", "Scissors"];
let computerChoice = choice[random].toLowerCase();


// get player input
let playerChoice = prompt('Please Choose: "Rock", "Paper", "Scissors"');

// convert choices to lower case
 let playerCompare = playerChoice.toLowerCase();
 let computerCompare = computerChoice.toLowerCase();

// compare player choice to commputer choice
if(playerCompare === computerCompare) {
    console.log = `It's a Tie!`;
} else if(playerCompare === "rock" && computerCompare === "paper") {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
}