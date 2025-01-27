const btns = document.querySelector("#btns");
const rps = document.querySelector("#rps");
const again = document.querySelector("#again");
const score = document.querySelector("#score");
const roundwin = document.querySelector("#roundwin");
const winner = document.querySelector("#winner");


let humanScore = 0;
let computerScore = 0;


rps.addEventListener("click", (e) => {
    let target = e.target;
    playRound(target.id);
});


again.addEventListener("click", (e) => {
    humanScore = 0;
    computerScore = 0;
    score.innerText = "Score: 0 - 0"
    rps.style.display = "flex";
    again.style.display = "none";
    roundwin.innerText = "Welcome to Rock Paper Scissors!\
                        Press any button to begin"
    winner.innerText = ""
});


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
                roundwin.innerText = "Tie!";
            } else if (computerChoice == "paper") {
                roundwin.innerText = "You lose! Paper beats Rock";
                computerScore += 1;
            } else if (computerChoice == "scissors") {
                roundwin.innerText = "You win! Rock beats Scissors";
                humanScore += 1;
            }
            break;
            
        case "paper":
            if (computerChoice == "rock") {
                roundwin.innerText = "You win! Paper beats Rock";
                humanScore += 1;
            } else if (computerChoice == "paper") {
                roundwin.innerText = "Tie!";
            } else if (computerChoice == "scissors") {
                roundwin.innerText = "You lose! Scissors beats Paper";
                computerScore += 1;
            }
            break;
            
        case "scissors":
            if (computerChoice == "rock") {
                roundwin.innerText = "You lose! Rock beats Scissors";
                computerScore += 1;
            } else if (computerChoice == "paper") {
                roundwin.innerText = "You win! Scissors beats Paper";
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                roundwin.innerText = "Tie!";
            }
            break;
    }
    score.innerText = `Score: ${humanScore} - ${computerScore}`

    if (humanScore === 5 || computerScore === 5) {
        rps.style.display = "none";
        again.style.display = "block";
        
        winner.innerText = (humanScore === 5) ? "You win!" : "You lose!";
    }
}