// create global variables
let random = Math.floor(Math.random() * 3);
let choice = ["Rock", "Paper", "Scissors"];
let computerChoice = choice[random].toLowerCase();
let playerScore = 0;
let computerScore = 0;
let lose;
let rounds = 0;
// get player input
let playerChoice = prompt('Please Choose: "Rock", "Paper", "Scissors"');

// convert choices to lower case
 let playerCompare = playerChoice.toLowerCase();
 let computerCompare = computerChoice.toLowerCase();



// assign points
function checkLoss() {
    if (lose) {
        computerScore++;
    } else {
        playerScore++;
    }
}


while (rounds < 3) {
    // compare player choice to commputer choice
if(playerCompare === computerCompare) {
    console.log = `It's a Tie!`;
} else if(playerCompare === "rock" && computerCompare === "paper") {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
    lose = true;
    checkLoss()
    rounds++;
} else if(playerCompare === "paper" && computerCompare === "scissors") {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
    lose = true;
    checkLoss()
    rounds++;
} else if(playerCompare === "scissors" && computerCompare === "rock") {
    console.log(`You Lose! ${computerChoice} beats ${playerChoice}`)
    lose = true;
    checkLoss()
    rounds++;
} else if(playerCompare === "rock" && computerCompare === "scissors") {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    lose = false;
    checkLoss()
    rounds++;
} else if(playerCompare === "paper" && computerCompare === "rock") {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    lose = false
    checkLoss()
    rounds++;
} else if(playerCompare === "scissors" && computerCompare === "paper") {
    console.log(`You Win! ${playerChoice} beats ${computerChoice}`)
    lose = false;
    checkLoss()
    rounds++;
}
}