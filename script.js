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

console.log(getComputerChoice());
// Test that your function returns what you expect using console.log or the browser developer tools before advancing to the next step.
