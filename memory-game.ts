import { CardsGenerator } from "./assets/game-assets/cardGenerator.ts";
import { Player } from "./assets/game-assets/player.ts";
import type { startGameType } from "./assets/types/types.ts";

export class MemoryGame {
  p1: Player | null = null;
  p2: Player | null = null;

  cardsGame: number[] | null = null

  constructor({p1Name, p2Name, maxNumCards}: startGameType) {
    this.p1 = new Player({name: p1Name});
    this.p2 = new Player({name: p2Name});
    
    this.cardsGame = CardsGenerator.generateCards(maxNumCards);
  }

  
  public get cardGame() : number[] {
    return this.cardGame
  }
  
}