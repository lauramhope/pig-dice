//Buisness Logic for Game

function Game(){
  this.gamePlayers = {}
  this.currentId = 1;
  this.maxId = 0;
}

Game.prototype.addPlayer = function(player){
  player.id = this.assignId();
  this.gamePlayers[player.id] = player;
};

Game.prototype.assignId = function(){
//  this.currentId += 1;
  this.maxId += 1;
  return this.maxId;
};

Game.prototype.findPlayer = function(){
  // if(this.gamePlayers[id] !== undefined){
  //   return this.addPlayer[id];
  // } else {
  //   return this.addPlayer[0];
  // }
  let currentPlayer;
  Object.keys(this.gamePlayers).forEach(function(key) {
    //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
    if(game.currentId.toString() ===  key){
      currentPlayer = this.gamePlayers[key];
    }
  });
  return currentPlayer;
}

Game.prototype.updateCurrentId = function(){
  console.log("type current + max:",typeof(this.currentId),typeof(this.maxId));
  if(this.currentId >= this.maxId){
    this.currentId = 1;
  } else {
    this.currentId += 1;
  }
};

//Business Logic for Players
function Player(playerName) {
  this.playerName = playerName;
  this.totalScore = 0;  
  this.roundScore = 0;
  this.roll = 0;
  //this.scoreHistory = [];
}

//Business Logic for Player Turns

Player.prototype.playerTurn = function() {
  this.rollDice();
  console.log(this.roll,this.roundScore);
  // if (this.roll === 1) {
  //   this.roundScore = 0;
  //   this.holdDice();
  //   console.log("roll = 0, pass turn");
  // } else  {
  //   this.roundScore += this.roll;
  // }
  this.roundScore += this.roll;
 // this.checkWin();
  
  // call function to show updated score
};

Player.prototype.rollDice = function() {
  this.roll = Math.ceil(Math.random()*6); 
};

Player.prototype.checkWin = function(){
  if(this.roundScore + this.totalScore >= 100){
    alert("This player has won the game");
  }
};

Player.prototype.holdDice = function(){
  this.totalScore += this.roundScore;
  this.roundScore = 0;
  this.roll = 0;
};

// Player.prototype.passTurn = function() {

//   // WIP
//   // update database of palyers to go to next player in the list 
// };

//UI Logic
//Global Variable for Game - database
let game = new Game();

function displayGame(gameToDisplay, branch)  {
  let currentPlayer = gameToDisplay.gamePlayers[1];
  console.log(currentPlayer);
  let rolledOne = false;
  switch(branch){
    case(1): 
      // if(gameToDisplay.maxId === 1){
      //   currentPlayer = gameToDisplay.gamePlayers[1];
      // }
    break;
    case(2):
      Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
        //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
        if(gameToDisplay.currentId.toString() ===  key){
          currentPlayer = gameToDisplay.gamePlayers[key];
          currentPlayer.playerTurn();
        }
      });
      if(currentPlayer.roll === 1){
        rolledOne = true;
        currentPlayer.roundScore = 0;
        gameToDisplay.updateCurrentId();
        currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
      }
      currentPlayer.checkWin();
      break;
    case(3):
    Object.keys(gameToDisplay.gamePlayers).forEach(function(key) {
      //  console.log("key",key,typeof(gameToDisplay.currentId),gameToDisplay.currentId.toString() ===  key)
      if(gameToDisplay.currentId.toString() ===  key){
        currentPlayer = gameToDisplay.gamePlayers[key];
        currentPlayer.holdDice();
      }
    });
    gameToDisplay.updateCurrentId();
    currentPlayer = gameToDisplay.gamePlayers[gameToDisplay.currentId];
    break;
}
    changeInfoPlayer(currentPlayer,rolledOne);

}

function changeInfoPlayer(currentPlayer,rolledOne){
  if(rolledOne){
    document.querySelector("#rolled-one").innerText = "Sorry the previous player rolled a one and it is not there turn anymore!";
  } else{
    document.querySelector("#rolled-one").innerText = "";
  }
  document.querySelector("#player-name").innerText = currentPlayer.playerName;
  document.querySelector("#roll-amount").innerText = currentPlayer.roll;
  document.querySelector("#round-amount").innerText = currentPlayer.roundScore;
  document.querySelector("#total-score").innerText = currentPlayer.totalScore;  
  //   document.querySelector("#everyone-score").innerText = player.totalScore;
}

function updateTotalPlayers(game){
  document.querySelector("#total-player").innerText ="";
  let totalPlayers = [];
  Object.keys(game.gamePlayers).forEach(function(key){
    totalPlayers.push(" " + game.gamePlayers[key].playerName)
  })
  document.querySelector("#total-player").append(totalPlayers);
  
}

function handleFormSubmission(event)  {
  event.preventDefault();
  const inputtedPlayerName = document.querySelector("input#name1").value;
  let newPlayer = new Player(inputtedPlayerName);
  console.log("the new player constructor: ",newPlayer)
  game.addPlayer(newPlayer);
  // add newPlayer to game here if we make a Game() constructor
  displayGame(game,1); 
  updateTotalPlayers(game);
  document.querySelector("input#name1").value = null;
}

function handleRollButton(event)  {
  //Need to find which id to grab
  event.preventDefault();
  displayGame(game,2);
}

function handlePassButton(event)  {
  event.preventDefault();
  displayGame(game,3);
  
}
  
window.addEventListener("load", function(){
  document.querySelector("form#game-setup").addEventListener("submit", handleFormSubmission);
  document.querySelector("button#roll").addEventListener("click", handleRollButton);
  document.querySelector("button#hold").addEventListener("click", handlePassButton);
});

