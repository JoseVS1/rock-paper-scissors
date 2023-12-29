const selections = document.querySelectorAll(".selection");
const result = document.querySelector(".result");
const h1 = document.querySelector("h1");
const round = document.querySelector("h2");
const score = document.querySelector("h3");

selections.forEach(button => {
    console.log(button.textContent)
    button.addEventListener("click", () => playRound(button.textContent, getComputerChoice()))
})

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
        h1.textContent = "It's a tie! Let's play again.";
        // playRound(prompt("Make your choice"), getComputerChoice());
    } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
        h1.textContent = "You win!";
        return "You win!";
    } else {
        h1.textContent = "Computer wins!";
        return "Computer wins!";
    }
}

// function game() {
//     let userScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         round.textContent = `Round ${i + 1}`
//         score.textContent = `Your score: ${userScore}\nComputer score: ${computerScore}`;

//         const result = playRound(prompt("Make your choice: Rock, Scissors or Paper"), getComputerChoice());

//         if (result === "You win!") {
//             userScore += 1;
//         } else if (result === "Computer wins!") {
//             computerScore += 1;
//         }
//     }

//     h1.textContent = userScore > computerScore ? "You won the game!" : "The computer won the game.";
// }

// game();