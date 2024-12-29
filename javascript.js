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


function getHumanChoice() {
    return (prompt("Let's play Rock Paper Scissors!",
         "rock, paper, scissors").toLowerCase());
}


function playGame() {
    
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

    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice();
        let humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }

    if (humanScore > computerScore) {
        console.log("You win!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("Tie!");
    }

    console.log("Score: " + humanScore + ":" + computerScore)
}