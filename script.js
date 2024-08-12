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
  let humanScore = 0;
  let computerScore = 0;

  function getHumanChoice() {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    rockBtn.addEventListener("click", function () {
      const humanChoice = "rock";
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });

    paperBtn.addEventListener("click", function () {
      const humanChoice = "paper";
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });

    scissorsBtn.addEventListener("click", function () {
      const humanChoice = "scissors";
      const computerChoice = getComputerChoice();
      playRound(humanChoice, computerChoice);
    });
  }

  getHumanChoice();

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "rock") {
      results.innerText = "Draw!";
    } else if (humanChoice === "paper" && computerChoice === "paper") {
      results.innerText = "Draw!";
    } else if (humanChoice === "scissors" && computerChoice === "scissors") {
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
  }
}
playGame();
