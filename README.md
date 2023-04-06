# _Pig-Dice_

#### By **Laura Hope, Joseph Wahbeh, Gareth Grindeland**_

#### _Application demonstrating an interactive game between multiple players_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This application showcases using constructor functions and custom prototypes to display a game allowing multiple players to submit user input, roll dice via number randomization, and hold dice to pass turn to next player. Application includes Object-Oriented JavaScript methods, functions, switch statements, looping, and object.keys_

## Setup/Installation Requirements

* _Clone “pig-dice“ from the repository to your desktop_
* _Open “pig-dice“ directory_
* _Open “index.html“ file in your browser_

## Tests
```
Describe: Player()

Test: "It will generate a player for the game starting with total score of 0 and round score of 0"
Code: Player();
Expected Output: Player.totalScore = 0, Player.roundScore = 0;

Describe: Player.prototype.rollDice()

Test: "It will roll dice, generating a number between 1-6"
Code: rollDice();
Expected Output: random positive integer between 1 and 6

Describe: playerTurn()

Test: "It will take each player's turn rolling the dice and include branching depending on what the player rolls"
Code: playerTurn();
Expected Output: random dice number between 1-6

Describe: Player.prototype.checkWin()

Test: "It will check to see if the sum of the current round score and the total score is greater than or equal to 100"
Code: checkWin();
Expected Output: if total score >= 100 , player has won

Describe: Player.prototype.holdDice()

Test: "It will hold the dice on current player's turn and give the sum of the round score and total score."
Code: holdDice()
Expected Output: 

```

## Known Bugs

* _Any known issues_

## License

MIT License

Copyright (c) [2023] [Laura Hope, Joseph Wahbeh, Gareth Grindeland]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

_If you run into any issues or have questions, ideas or concerns, please reach out via email: lauramhope.dpt@gmail.com, whobbes22@gmail.com, gt.grindeland@gmail.com.  Contributions to the code are highly encouraged._


