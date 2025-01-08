function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    switch(num) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let humanScore = 0;
let computerScore = 0;




function playRound(humanChoice, computerChoice) {
    switch(humanChoice) {
            
        case "rock":
            if (computerChoice == "rock") {
                console.log("Tie!");
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
                computerScore += 1;
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
                humanScore += 1;
            }
            break;
            
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
                humanScore += 1;
            } else if (computerChoice == "paper") {
                console.log("Tie!");
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
            }
            break;
            
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors");
                computerScore += 1;
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                console.log("Tie!");
            }
            break;
    }
}