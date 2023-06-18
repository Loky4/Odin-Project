// function to randomly generate computer's choice of the game.
function getComputerChoice() {
    const CHOICES = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[choice];
}



function plauRound(playerChoice) {
    let computerChoice = getComputerChoice();
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (playerChoice == computerChoice) {

        console.log(`Tied game with both ${computerChoice}`);
        return 0;

    } else if ((playerChoice == "Rock" && computerChoice == "Scissors") ||
        (playerChoice == "Paper" && computerChoice == "Rock") ||
        playerChoice == "Scissors" && computerChoice == "Paper") {

        console.log(`You win! ${playerChoice} beats ${computerChoice}!`);
        return 1;
    } else {

        console.log(`You lose! ${playerChoice} beaten by ${computerChoice}`);
        return -1;
    }
}


console.log(playGame());

function playGame() {
    let i = 1, score = 0;
    while (i <= 5) {
        let playerChoice = prompt(`Choose your move for round ${i}!`);
        score += plauRound(playerChoice, score);
        //console.log(score);
        i++;
    }
    if (score > 0) {
        return ("Oh yeah")
    } else {
        return ("Damn it")
    }
}




