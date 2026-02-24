import { CardsGenerator } from "./assets/game-assets/cardGenerator.ts";
import { Player } from "./assets/game-assets/player.ts";
import type { startGameType } from "./assets/types/types.ts";

export class MemoryGame {
  private p1: Player | null = null;
  private p2: Player | null = null;

  private cards: number[] = []

  private isP1Turn: boolean = true;
  private isGameDone: boolean = false;
  private whoWin: string = ""; 

  constructor({p1Name, p2Name, maxNumCards}: startGameType) {
    this.p1 = new Player({name: p1Name});
    this.p2 = new Player({name: p2Name});
    
    this.cards = CardsGenerator.generateCards(maxNumCards);
  }
  
  // which index user will choose to pick an card?
  public pickUpCard(index: number) {
    const isPlayerSucessChoose = this.isP1Turn 
    ? this.p1!.chooseCard(index, this.cards) 
    : this.p2!.chooseCard(index, this.cards);

    if (this.p1!.isPlayerWin(this.cards)) {
      this.isGameDone = true;
      this.whoWin = this.p1!.getName;
      return;
    }

    if (this.p2!.isPlayerWin(this.cards)) {
      this.isGameDone = true;
      this.whoWin = this.p2!.getName;
      return;
    }

    if (!isPlayerSucessChoose){
      this.isP1Turn = !this.isP1Turn;
    }

    return;
  }

  public get getCards() : number[] {
    return this.cards!
  }

  // returns the cards blured
  public get getBlurCards(): string[] {
    return this.cards.map(card => "*");
  }

  public get getIsP1Turn() : boolean {
    return this.isP1Turn
  }

  public get getIsGameDone() {
    return this.isGameDone;
  }
}

const mGame = new MemoryGame({p1Name: "Leo", p2Name: "Eduard", maxNumCards: 10});
console.log(mGame.getBlurCards);

