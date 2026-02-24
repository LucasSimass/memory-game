export class Player { 
  private name: string = "";
  private cardsChoosed: number[] = []; // every sequal of chose user did (and not failed)

  constructor({name}: {name: string}) {
    this.name = name;
  }

  public get getName() : string {
    return this.name;
  }

  public get getCardsChoosed() : number[] {
    return this.cardsChoosed;
  }

  /**
   * action of user to pick up an card and check if it's valid
   * 
   * @param {number} index - the index of the card choosed
   * 
   * @param {number[]} cards - the cards on the game
   * 
   * @returns true, if the last card number choosed is the same as choosed or it was the first one or if the last card number and penultimate card number is the same
   * 
   * @returns false, if the last card doesn't match the last card choosed 
   * 
  */
  public chooseCard(index: number, cards: number[]) : boolean {
    if (index < 0 || index > cards.length - 1 ) {
      throw new Error("index should be > 0 and <=cards.length")
    }

    // num of card choosed
    const numChoosed = cards[index]!;

    // TODO:
    // 1) check if the last index is the same as the currently

    // if cardsChoosed lenght == 0, can go on! 
    if (this.cardsChoosed.length == 0) {
      this.cardsChoosed.push(cards[index]!);
      return true;
    }

    // if card choosed is the same as the last on cardsChoosed
    if (this.cardsChoosed[this.cardsChoosed.length - 1] == numChoosed){
      this.cardsChoosed.push(cards[index]!);
      return true;
    }

    // if the last cards was the same it means that player can choose another
    if (this.cardsChoosed[this.cardsChoosed.length - 2] == this.cardsChoosed[this.cardsChoosed.length - 1]){
      this.cardsChoosed.push(cards[index]!);
      return true;
    }


    // clear if is user fail
    // and returns false
    this.cardsChoosed = [];
    return false;
  }


  /**
   * Check if user win.
   * 
   * @param {number[]} cards - the game's cards
   * 
   * @returns boolean, check if the user have the same length of the cards
  */
  public isPlayerWin(cards: number[]) {
    return this.cardsChoosed.length == cards.length 
  }
}