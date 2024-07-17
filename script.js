"use strict";
console.log("hello jobin");

// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

// Hint: The Math.random method returns a random number that’s greater than or equal to 0 and less than 1. Think about how you can use this to conditionally return one of the multiple choices.

function getComputerChoice() {
  // create array with string options
  const choicesArr = ["rock", "paper", "scissors"];
  // generate a random number up to length of const array
  const computerChoice = Math.floor(Math.random() * 3);
  // return element from array using position from random number generated
  return choicesArr[computerChoice];
}

// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
console.log(getComputerChoice());

// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.
// Hint: Use the prompt method to get the user’s input.
// Test what your function returns by using console.log.
function getHumanChoice() {
  const humanChoice = prompt("Choose your weapon.", "Rock, paper, or scissors");
  return console.log(humanChoice);
}

// Create two new variables named humanScore and computerScore in the global scope.
// Initialize those variables with the value of 0.

let humanScore = 0;
let computerScore = 0;

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. Use these two parameters to take the human and computer choices as arguments.
// Make your function’s humanChoice parameter case-insensitive so that players can input “rock”, “ROCK”, “RocK”, or other variations.
// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// Increment the humanScore or computerScore variable based on the round winner.

function playRound(humanChoice, computerChoice) {
  if (computerChoice === "rock" && humanChoice === "rock") {
    console.log("Draw!");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    console.log("Paper beats rock!");
  } else {
    console.log("Rock beats scissors!");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
