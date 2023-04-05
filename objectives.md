PIG DICE OBJECTIVES
What will happen when a user clicks "Play"?
Rolls the dice
Generates a number
If 1 = will end turn and move to next person → round score = 0
Call “pass turn” → display next player’s turn
If > 1 = will add number and continue rolling

What objects will you need?
Player 1
Player 2

What key-value pairs will each object need to contain in order for the game to work?
name, each round cumulative score, total score
What functions?

rollDice() → Math.random – generates random number (1-6)
addScores()
nextPlayer()
displayScore()

How will these be triggered throughout the gameplay?
Button 1 - roll dice → eventListener rollDice()
Button 2 - hold

How will information be collected from the user? How will it be displayed?
Form input for player’s name, display w/ round and total scores
