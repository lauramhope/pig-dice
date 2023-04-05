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
    if (this.roll === 1) {
      this.roundScore = 0;
      this.passTurn();
      console.log("roll = 0, pass turn");
    } else  {
      this.roundScore += this.roll;
    }
    this.checkWin();
    
    // call function to show updated score
  }

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
  };

  Player.prototype.passTurn = function() {
   // update database of palyers to go to next player in the list 
  }

  //UI Logic  
  function displayPlayers(player)  {
    // const player = // get input from data base
    document.querySelector("#player-name").innerText = player.playerName;
    document.querySelector("#roll-amount").innerText = player.roll;
    document.querySelector("#round-amount").innerText = player.roundScore;
    document.querySelector("#total-score").innerText = player.totalScore;
  }

  function handleFormSubmission(event)  {
    event.preventDefault();
    const inputtedPlayerName = document.querySelector("input#name1").value;
    let newPlayer = new Player(inputtedPlayerName);
    // add newPlayer to game here if we make a Game() constructor
    displayPlayers(newPlayer); // change to display game later
    document.querySelector("input#name1").value = null;
  }

  function handleRollButton(event)  {
    event.preventDefault();
    // player1.playerTurn();
  }

  function handlePassButton(event)  {
    event.preventDefault();
  }
    
  window.addEventListener("load", function(){
    document.querySelector("form#game-setup").addEventListener("submit", handleFormSubmission);
    document.querySelector("button#roll").addEventListener("click", handleRollButton);
    document.querySelector("button#pass").addEventListener("click", handlePassButton);
  });