// CREATED BY LUCAS SIMAS - 02/2026

import { MemoryGame } from "../memory-game.ts";

// create game and add settings
const mGame = new MemoryGame({p1Name: "Jhon", p2Name: "Harry", maxNumCards: 10});

// get all cards
console.log(mGame.getCards); // example -> [1,2,2,1,3,4,5,5,3,4]

// see the game cards with "blur"
console.log(mGame.getBlurCards);

// see original game cards
console.log(mGame.getCards);

// make player 1 pick an card
mGame.pickUpCard(0)

// check what player 1 picked
console.log(mGame.getP1CardsChoosed);

// see the index of the cards as well
console.log(mGame.getP1CardsChoosedIndex);

// it's the first card so, it can pick another
mGame.pickUpCard(1) // ATTENTION: Cannot be the same or will return an error!

// check if player pick the right one (same as the last one)
console.log(mGame.getIsP1Turn);

// if player did not it will pass the turn to the player 2 (p2)
console.log(mGame.pickUpCard(2)) // ATTENTION: if getIsP1Turn return false, that means that this move is of the player 2;

// check if player win (in this case it will return false, bc game is not done)
console.log(mGame.getIsGameDone) // if game is done
console.log(mGame.getWhoWin); // get name of the winner (p1 or p2 name)