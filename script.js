let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function translator(letter) {
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissor";
}

function win(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userLabel = "You".fontsize(3).sub();
    const computerLabel = "Me".fontsize(3).sub();
    result_p.innerHTML = ` ${translator(userChoice)}${userLabel}  beats  ${translator(computerChoice)}${computerLabel}. You WON!`;
}

function loose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const userLabel = "You".fontsize(3).sub();
    const computerLabel = "Me".fontsize(3).sub();
    result_p.innerHTML = ` ${translator(userChoice)}${userLabel}  lost to  ${translator(computerChoice)}${computerLabel}. You LOST!`;
}

function draw(userChoice, computerChoice) {
    const userLabel = "You".fontsize(3).sub();
    const computerLabel = "Me".fontsize(3).sub();
    result_p.innerHTML = ` ${translator(userChoice)}${userLabel}  equals  ${translator(computerChoice)}${computerLabel}. It's a DRAW!`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "ps":
        case "sr":
            loose(userChoice, computerChoice);
            break;
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener('click', () => game("r"));
    paper_div.addEventListener('click', () => game("p"));
    scissor_div.addEventListener('click', () => game("s"));
}

main();