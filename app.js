let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");



function main() {
  rock_div.addEventListener('click', function () {
    game("rock");
  })

  paper_div.addEventListener('click', function () {
    game("paper");
  })

  scissors_div.addEventListener('click', function () {
    game("scissors");
  })
}

function getCompChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(user, comp) {
  userScore++;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = user + " beats " + comp + ". You Win!"
}

function lose(user, comp) {
  compScore++;
  compScore_span.innerHTML = compScore;
  result_p.innerHTML = user + " loses to " + comp + ". You Lose!"
}

function tie(user, comp) {
  result_p.innerHTML = user + " = " + comp + ". Tie!"
}

function game(userChoice) {
  const compChoice = getCompChoice();
  switch (userChoice + compChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, compChoice);
      break;
    case "scissorsrock":
    case "paperscissors":
    case "rockpaper":
      lose(userChoice, compChoice);
      break;
    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
      tie(userChoice, compChoice);
      break;
  }
}

main();