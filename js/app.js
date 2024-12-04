const ruleButton = document.querySelector(".rule-button");

const rules = document.querySelector(".rules");
const buttonInRules = document.querySelector(".rules button");
const gameButtons = document.querySelector(".game-buttons");

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

function  playGame(e) {
    const computerChoice = Math.floor(Math.random() * 3);
    const playerChoice = e.value;

    // TODO: Finish adding functionality to buttons and Game logic
    if (computerChoice < 0) {
    }
}
const buttons = gameButtons.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", playGame);
});