const readline = require("readline-sync");
/*
Adventure Game
This game will be a text-based game where the player will be able
to make choices that affect the outcome of the game.
The player will be able to choose their own path and the story will change
based on their decisions.
*/
console.log("=================================");
console.log("       The Dragon's Quest        ");
console.log("=================================");
console.log("\nYour quest: Defeat the dragon in the mountains!");


let playerName = "";
let playerHealth = 100;
let playerGold = 20;
let currentLocation = "village";
let inventory = [];
playerName = readline.question("What is your name?: ");
console.log("Welcome, ", playerName);
console.log("Your staritng gold is: ", playerGold);