const ruleButton = document.querySelector(".rule-button");
const gameButtonsSection = document.querySelector('.game-buttons');
const rules = document.querySelector(".rules");
const buttonInRules = document.querySelector(".rules button");
const gameButtons = document.querySelector(".game-buttons");
const display = document.querySelector(".display");

const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
console.log(Math.floor(Math.random() * 3));
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

function whoWon() {

    if (playerScore > computerScore) {
        return "Player";
    }
    return "Computer"
}
function  playGame(e) {
    let HTMLString = '';
    const computerChoice = Math.floor(Math.random() * 3);
    // I got the value of the button pressed using Event and EventTarget
    const playerChoice = Number(e.target.value);
    console.log(`Player choice: ${playerChoice} and Computer: ${computerChoice}`);

    if ((computerChoice > playerChoice) && (playerChoice + computerChoice !== 2)) {
        computerScore++;
        HTMLString = `
        <p>Computer wins! ${choices[computerChoice]} beats ${choices[playerChoice]}</p>
        `;
    } else if (computerChoice === playerChoice) {
        HTMLString = `
        <p>It's a tie! Both chose ${choices[computerChoice]}</p>
        `;
    } else {
        playerScore++;
        HTMLString = `
        <p>Player wins! ${choices[playerChoice]} beats ${choices[computerChoice]}</p>
        `;
    }

    if (playerScore > 2 || computerScore > 2) {
        gameButtonsSection.classList.add('hidden');
        HTMLString += `
        <p>${whoWon()} has won the game!</p>
        <button type="button" class="play button">Play again?</button>
        `;
        display.innerHTML = HTMLString;
        playerScoreDisplay.innerText = playerScore;
        computerScoreDisplay.innerText = computerScore;
        const resetButton = document.querySelector(".play");
        resetButton.addEventListener("click", reset);
        return;
    }
    playerScoreDisplay.innerText = playerScore;
    computerScoreDisplay.innerText = computerScore;
    display.innerHTML = HTMLString;

}

const buttons = gameButtons.querySelectorAll("button");

buttons.forEach((button) => {
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