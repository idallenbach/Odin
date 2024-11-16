// create global variables
let random = Math.floor(Math.random() * 3);
let choice = ["Rock", "Paper", "Scissors"];
let computerChoice = choice[random].toLowerCase();
let player = prompt("Rock, Paper, Scissors").toLowerCase();

if (player == computerChoice) {
    console.log("yup");
} else {
    console.log("nope");
}