import { CardsGenerator } from "./assets/game-assets/cardGenerator.ts";
import { Player } from "./assets/game-assets/player.ts";
import type { startGameType } from "./assets/types/types.ts";

export class MemoryGame {
  private p1: Player | null = null;
  private p2: Player | null = null;

  private cards: number[] = [];

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
    if (this.isGameDone){
      throw new Error("Player can't pick up an card, because game is done!")
    }
    
    const isPlayerSucessChoose = this.isP1Turn 
    ? this.p1!.chooseCard(index, this.cards) 
    : this.p2!.chooseCard(index, this.cards);

    if (this.p1!.isPlayerWin(this.cards)) {
      this.isGameDone = true;
      this.whoWin = this.p1!.getName;
      return true;
    }

    if (this.p2!.isPlayerWin(this.cards)) {
      this.isGameDone = true;
      this.whoWin = this.p2!.getName;
      return true;
    }

    if (!isPlayerSucessChoose){
      this.isP1Turn = !this.isP1Turn;
    }

    return false;
  }

  public get getP1CardsChoosed() {
    return this.p1!.getCardsChoosed;
  }

  public get getP1CardsChoosedIndex() {
    return this.p1!.getCardsChoosedIndex;
  }

  public get getP2CardsChoosed() {
    return this.p2!.getCardsChoosed;
  }

  public get getP2CardsChoosedIndex() {
    return this.p2!.getCardsChoosedIndex;
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

  public get getWhoWin() {
    return this.whoWin.length == 0 ? "nobody": this.whoWin;
  }
}

const mGame = new MemoryGame({p1Name: "Leo", p2Name: "Eduard", maxNumCards: 4});


