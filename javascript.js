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
    return prompt("Let's play Rock Paper Scissors!", "rock, paper, scissors");
}

let humanScore = 0;
let computerScore = 0;

function playRound() {
    
}