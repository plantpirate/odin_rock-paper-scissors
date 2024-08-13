"use strict";
console.log("hello jobin");

function getComputerChoice() {
  // create array with string options
  const choicesArr = ["rock", "paper", "scissors"];
  // generate a random number up to length of const array
  let computerChoice;

  do {
    computerChoice = choicesArr[Math.floor(Math.random() * 3)];
  } while (computerChoice === getComputerChoice.previousChoice);

  getComputerChoice.previousChoice = computerChoice;
  return computerChoice;
}

function playGame() {
  const results = document.querySelector(".results__container span");
  const humanSpan = document.querySelector(".human-choice span");
  const computerSpan = document.querySelector(".computer-choice span");
  const humanScoreText = document.querySelector(".human_score span");
  const computerScoreText = document.querySelector(".computer_score span");
  const buttons = document.querySelectorAll(".button");

  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice() {
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const humanChoice = btn.id;
        const computerChoice = getComputerChoice();
        humanSpan.innerText = `${humanChoice}`;
        computerSpan.innerText = `${computerChoice}`;
        playRound(humanChoice, computerChoice);
      });
    });
  }

  getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      results.innerText = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      results.innerText = "You lose! Paper beats rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      results.innerText = "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      results.innerText = "You lose! Scissors beats paper!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      results.innerText = "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      results.innerText = "You lose! Rock beats scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      results.innerText = "You win! Scissors beats paper!";
    }
    humanScoreText.innerText = `${humanScore}`;
    computerScoreText.innerText = `${computerScore}`;

    if (humanScore === 5 && computerScore < humanScore) {
      results.innerText = "you win";
      humanSpan.innerText = computerSpan.innerText = "";
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore === 5 && humanScore < computerScore) {
      results.innerText = "you lose";
      humanSpan.innerText = computerSpan.innerText = "";
      humanScore = 0;
      computerScore = 0;
    }
  }
}
playGame();
