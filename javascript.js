const btn = document.querySelector("button");
btn.addEventListener("click", playRound(btn.id));

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

function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    switch(humanChoice) {
            
        case "rock":
            if (computerChoice == "rock") {
                console.log("Tie!");
            } else if (computerChoice == "paper") {
                console.log("You lose! Paper beats Rock");
            } else if (computerChoice == "scissors") {
                console.log("You win! Rock beats Scissors");
            }
            break;
            
        case "paper":
            if (computerChoice == "rock") {
                console.log("You win! Paper beats Rock");
            } else if (computerChoice == "paper") {
                console.log("Tie!");
            } else if (computerChoice == "scissors") {
                console.log("You lose! Scissors beats Paper");
            }
            break;
            
        case "scissors":
            if (computerChoice == "rock") {
                console.log("You lose! Rock beats Scissors");
            } else if (computerChoice == "paper") {
                console.log("You win! Scissors beats Paper");
            } else if (computerChoice == "scissors") {
                console.log("Tie!");
            }
            break;
    }
}