/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

// define variables for scores, roundScore, player and dice
const scores = [0,0]
const roundScore = 0;
const activePlayer = 0;
const dice = Math.floor(Math.random() * 6) + 1;


// select the element for the current player and display a random number in the dice as text
document.querySelector("#current-" + activePlayer).textContent = dice;

// set the dice to not display when page is reloaded by calling the css class
document.querySelector(".dice").style.display = 'none';