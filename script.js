"use strict";
console.log("hello jobin");

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

function getComputerChoice() {
  // create array with string options
  const choicesArr = ["rock", "paper", "scissors"];
  // generate a random number up to length of const array
  const computerChoice = choicesArr[Math.floor(Math.random() * 3)];
  return computerChoice;
}

// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

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
