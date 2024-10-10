let getComputerChoice = () => {
  let num = Math.floor(Math.random() * 3);
  if (num === 0) return "rock";
  else if (num === 1) return "paper";
  else return "scissors";
};
let getHumanChoice = () => {
  let choice;
  do {
    choice = prompt("Type: Rock, Paper, or Scissors");
    choice = choice.toLocaleLowerCase();
  } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
  return choice;
};
let playRound = (humanChoice, computerChoice) => {
  if (humanScore >= 5 || computerScore >= 5) return 0;
  results.textContent = "";
  if (humanChoice === computerChoice) {
    results.textContent = `Tie! You both chose ${humanChoice}`;
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      results.textContent = "You win! Rock beats scissors";
      humanScore++;
    } else {
      results.textContent = "You lose! Paper beats rock";
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      results.textContent = "You win! Paper beats rock";
      humanScore++;
    } else {
      results.textContent = "You lose! Scissors beats paper";
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      results.textContent = "You win! Scissors beats paper";
      humanScore++;
    } else {
      results.textContent = "You lose! Rock beats scissors";
      computerScore++;
    }
  }
  if (humanScore >= 5) {
    final.textContent = "Game Over! You Win!";
    document.body.appendChild(reset);
  }
  else if (computerScore >= 5) {
    final.textContent = "Game Over! You Lose!"
    document.body.appendChild(reset);
  }
};

let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const results = document.querySelector("#results");
const summary = document.querySelector("#summary");
const final = document.querySelector("#final");
const reset = document.createElement("button");
reset.textContent = "Play again?"

rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  summary.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
});
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  summary.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
});
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  summary.textContent = `Score: You ${humanScore} - ${computerScore} Computer`;
});
reset.addEventListener("click", () => {
  humanScore = 0;
  computerScore = 0;
  results.textContent = "";
  summary.textContent = "";
  final.textContent = "";
  document.body.removeChild(reset);
});