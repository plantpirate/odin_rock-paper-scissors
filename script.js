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
  const roundResults = document.querySelector(".round-results span");
  const gameResults = document.querySelector(".game-results span");
  const humanSpan = document.querySelector(".human-choice span");
  const computerSpan = document.querySelector(".computer-choice span");
  const humanScoreText = document.querySelector(".human_score span");
  const computerScoreText = document.querySelector(".computer_score span");
  const buttons = document.querySelectorAll(".button");

  const updateUI = function (humanChoice, computerChoice) {
    humanSpan.innerText = `${humanChoice}`;
    computerSpan.innerText = `${computerChoice}`;
    humanScoreText.innerText = `${humanScore}`;
    computerScoreText.innerText = `${computerScore}`;
  };

  const clearChoicesText = function () {
    humanSpan.innerText = computerSpan.innerText = "";
  };
  const resetScores = function () {
    humanScore = computerScore = 0;
  };
  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice() {
    buttons.forEach((btn) => {
      btn.addEventListener("click", function () {
        const humanChoice = btn.id;
        const computerChoice = getComputerChoice();
        updateUI(humanChoice, computerChoice);
        playRound(humanChoice, computerChoice);
      });
    });
  }

  getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
      roundResults.innerText = "Draw!";
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      computerScore += 1;
      roundResults.innerText = "You lose! Paper beats rock!";
    } else if (humanChoice === "rock" && computerChoice === "scissors") {
      humanScore += 1;
      roundResults.innerText = "You win! Rock beats scissors!";
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      computerScore += 1;
      roundResults.innerText = "You lose! Scissors beats paper!";
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      humanScore += 1;
      roundResults.innerText = "You win! Paper beats rock!";
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      computerScore += 1;
      roundResults.innerText = "You lose! Rock beats scissors!";
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
      humanScore += 1;
      roundResults.innerText = "You win! Scissors beats paper!";
    }
    updateUI(humanChoice, computerChoice);

    if (humanScore === 5 && computerScore < humanScore) {
      gameResults.innerText = "you win";
      clearChoicesText();
      resetScores();
    } else if (computerScore === 5 && humanScore < computerScore) {
      gameResults.innerText = "you lose";
      clearChoicesText();
      resetScores();
    }
  }
}
playGame();
