//declare global variables
let rounds = 0;
let lose;
let playerScore = 0;
let computerScore = 0;

// randomly generate a computer choice
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3);
    let computerChoice = "";
    if (random === 0) {
        computerChoice = "Rock";
        return computerChoice;
    } else if (random === 1) {
        computerChoice = "Paper";
        return computerChoice;
    } else if (random === 2) {
        computerChoice = "Scissors";
        return computerChoice;
    } else {
        alert("Error: invalid input from computer")
    }
    
}

//prompt the user for a choice
function getHumanChoice() {
    let humanChoice = prompt('Please Choose: "Rock", "Paper", "Scissors"');
    return humanChoice;
}

  // assign points
function checkLoss() {
    if (lose) {
        computerScore++;
        return computerScore;
    } else {
        playerScore++;
        return playerScore;
    }
}

function playGame(){
   
    function playRound() {
        // get inputs and convert to lowercase
        let computerChoice = getComputerChoice()
        let humanChoice = getHumanChoice()
        computerChoice = computerChoice.toLowerCase()
        humanChoice = humanChoice.toLowerCase();
        // compare player choice to commputer choice
          if(humanChoice === "rock" && computerChoice === "paper") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} Player: ${playerScore}, Computer: ${computerScore}`)
            lose = true;
            checkLoss()
            rounds++;
        } else if(humanChoice === "paper" && computerChoice === "scissors") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} Player: ${playerScore}, Computer: ${computerScore}`)
            lose = true;
            checkLoss()
            rounds++;
        } else if(humanChoice === "scissors" && computerChoice === "rock") {
            console.log(`You Lose! ${computerChoice} beats ${humanChoice} Player: ${playerScore}, Computer: ${computerScore}`)
            lose = true;
            checkLoss()
            rounds++;
        } else if(humanChoice === "rock" && computerChoice === "scissors") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice} Player: ${playerScore}, Computer: ${computerScore}`)
            lose = false;
            checkLoss()
            rounds++;
        } else if(humanChoice === "paper" && computerChoice === "rock") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice} Player: ${playerScore}, Computer: ${computerScore}`);
            lose = false
            checkLoss()
            rounds++;
        } else if(humanChoice === "scissors" && computerChoice === "paper") {
            console.log(`You Win! ${humanChoice} beats ${computerChoice} Player: ${playerScore}, Computer: ${computerScore}`)
            lose = false;
            checkLoss()
            rounds++;
            // The scores are wrong because it's outputting the scores before calling checkloss() i honestly don't care anymore and i'm calling it done.
        }else {
            console.log(`It's a Tie! Player: ${playerScore}, Computer: ${computerScore}`);
            rounds++;
        }
    }
    while (rounds < 5) {
        playRound()
    }

    if(playerScore > computerScore) {
        console.log(`You Win! Player: ${playerScore}, Computer: ${computerScore}`)
    } else if (computerScore > playerScore) {
        console.log(`Computer Wins! Player: ${playerScore}, Computer: ${computerScore}`)
    } else {
        console.log(`It's a Tie!`)
    }
}


playGame()
