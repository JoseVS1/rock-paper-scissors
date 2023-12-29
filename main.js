const selections = document.querySelectorAll(".selection");
const result = document.querySelector(".result");
const h1 = document.querySelector(".winner");
const round = document.querySelector(".round");
const score = document.querySelector("h3");
const selectionsInfo = document.querySelector(".selections-info");
const finalWinner = document.querySelector(".final-winner");
const startBtn = document.querySelector(".start");

let currRound = 0;
let userScore = 0;
let computerScore = 0;

selections.forEach(button => {
    button.disabled = true;
    button.addEventListener("click", () => playRound(button.textContent, getComputerChoice()))
})

startBtn.addEventListener("click", handleBtnClick);

function handleBtnClick() {
    selections.forEach(x => x.disabled = false);

    if (startBtn.textContent === "Play") {
        startBtn.textContent = "Reset Game";
    } else {
        currRound = 0;
        userScore = 0;
        computerScore = 0;
        h1.textContent = "";
        round.textContent = "";
        score.textContent = "";
        selectionsInfo.textContent = "";
        finalWinner.textContent = "";
    }
}

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
    let gameResult = "";

    round.textContent = `Round ${currRound + 1}`;
    const player = playerSelection.toLowerCase();
    const computer = computerSelection;

    score.textContent = `Your score: ${userScore}\nComputer score: ${computerScore}`;

    selectionsInfo.textContent = `Computer: ${computer.charAt(0).toUpperCase() + computer.slice(1)} | You: ${player.charAt(0).toUpperCase() + player.slice(1)}`;

    if (player === computer) {
        h1.textContent = "It's a tie! Let's play again.";
    } else if (player === "rock" && computer === "scissors" || player === "paper" && computer === "rock" || player === "scissors" && computer === "paper") {
        h1.textContent = "You win!";
        userScore += 1;
        currRound++;
        gameResult = "You win!";
    } else {
        h1.textContent = "Computer wins!";
        computerScore += 1;
        currRound++; 
        gameResult = "Computer wins!";
    }

    if (currRound === 5) {
        finalWinner.textContent = userScore > computerScore ? "You won the game!" : "The computer won the game.";
        selections.forEach(button => {
            button.disabled = true;
        })
        h1.textContent = "";
        round.textContent = "";
        selectionsInfo.textContent = "";
        return;
    }

    return gameResult;
}