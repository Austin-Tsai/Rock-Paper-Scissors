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
  if (humanChoice === computerChoice) {
    console.log(`Tie! You both chose ${humanChoice}`);
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You win! Rock beats scissors");
      humanScore++;
    } else {
      console.log("You Lose! Paper beats rock");
      computerScore++;
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You win! Paper beats rock");
      humanScore++;
    } else {
      console.log("You Lose! Scissors beats paper");
      computerScore++;
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You win! Scissors beats paper");
      humanScore++;
    } else {
      console.log("You Lose! Rock beats scissors");
      computerScore++;
    }
  }
};
let playGame = () => {
  for (let i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    playRound(humanChoice, computerChoice);
    console.log(`Score: You ${humanScore} - ${computerScore} Computer`);
  }
};
let humanScore = 0;
let computerScore = 0;
playGame();
