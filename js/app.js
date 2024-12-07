const ruleButton = document.querySelector(".rule-button");
const gameButtonsSection = document.querySelector('.game-buttons');
const rules = document.querySelector(".rules");
const buttonInRules = document.querySelector(".rules button");
const gameButtons = document.querySelector(".game-buttons");
const display = document.querySelector(".display");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");

       /*******SHOWING AND HIDING RULES OF THE GAME***********/
function showRules() {
    ruleButton.classList.add("hidden")
    rules.classList.remove("hidden");
}

function hideRules() {
    ruleButton.classList.remove("hidden");
    rules.classList.add("hidden");
}

// Event listeners
ruleButton.addEventListener("click", showRules);
buttonInRules.addEventListener("click", hideRules);

const choices = ['Rock', 'Paper', 'Scissors'];

let playerScore = 0;
let computerScore = 0;

// This function controls the Game.
function  playGame(e) {
    let HTMLString = '';
    const computerChoice = Math.floor(Math.random() * 3);
    // I got the value of the button pressed using Event and EventTarget
    const playerChoice = Number(e.target.value);

    // Gets the appropriate String to display
    HTMLString = gameLogic(computerChoice, playerChoice);

    // Returns if someone won.
    if (playerScore > 2 || computerScore > 2) {
        declareWinner(HTMLString);
        return;
    }

    updateGame(HTMLString);
}

// Get a nodeList of all control buttons for the game
const rockPaperScissorButtons = gameButtons.querySelectorAll("button");

rockPaperScissorButtons.forEach((button) => {
    button.addEventListener("click", playGame);
});




function reset() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.innerText = playerScore
    computerScoreDisplay.innerText = computerScore;

    gameButtonsSection.classList.remove('hidden');
    display.innerHTML = '';
}

const gameLogic = (computerChoice, playerChoice) => {
    if ((computerChoice > playerChoice) && (playerChoice + computerChoice !== 2)) {
        computerScore++;
        return `
        <p>Computer wins! ${choices[computerChoice]} beats ${choices[playerChoice]}</p>
        `;
    } else if (computerChoice === playerChoice) {
        return `
        <p>It's a tie! Both chose ${choices[computerChoice]}</p>
        `;
    } else {
        playerScore++;
        return `
        <p>Player wins! ${choices[playerChoice]} beats ${choices[computerChoice]}</p>
        `;
    }
}

function whoWon() {

    if (playerScore > computerScore) {
        return "Player";
    }
    return "Computer"
}

function declareWinner(HTMLString) {
    gameButtonsSection.classList.add('hidden');
    HTMLString += `
        <p>${whoWon()} has won the game!</p>
        <button type="button" class="play button">Play again?</button>
        `;
    updateGame(HTMLString);
    const resetButton = document.querySelector(".play");
    resetButton.addEventListener("click", reset);
}

function updateGame(str) {
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    display.innerHTML = str;
}