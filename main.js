function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(`PLAYER SELECTION: ${playerSelection}`)
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;

    console.log(`You: ${player.charAt(0).toUpperCase() + player.slice(1)}\nComputer: ${computer.charAt(0).toUpperCase() + computer.slice(1)}`);

    if (player === computer) {
        console.log("It's a tie! Let's play again.");
        playRound(prompt("Make your choice"), getComputerChoice());
    } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
        console.log("You win!");
        return "You win!";
    } else {
        console.log("Computer wins!");
        return "Computer wins!";
    }
}

function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(`Your score: ${userScore}\nComputer score: ${computerScore}`);

        const result = playRound(prompt("Make your choice: Rock, Scissors or Paper"), getComputerChoice());
        console.log(`RESULT HAS: ${result}`)
        if (result === "You win!") {
            userScore += 1;
        } else if (result === "Computer wins!") {
            computerScore += 1;
        }
    }

    console.log(userScore > computerScore ? "You won the game!" : "The computer won the game.");
}

game();