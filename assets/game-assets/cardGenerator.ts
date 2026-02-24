import { GameMath } from "../types/math/gameMath.ts";

export class CardsGenerator {
  /**
   *
   * @param {number} maxNum - the max of numbers it will have on the card
   *
   * @returns {number[][]} - returns the card games
   *
   * @throws {Error} - if maxNum is < 1
   * 
   * @throws {Error} - if maxNum is an odd
   */
  static generateCards(maxNum: number) {
    const intMaxNum = Math.round(maxNum);

    if (intMaxNum < 1) {
      throw new Error("maxNum should be > 1");
    }

    if (intMaxNum % 2 !== 0){
      throw new Error("maxNum should be an even!");      
    }

    const gameCard: number[] = [];

    for (let i = 0; i < intMaxNum; i++) {
      let rNum = GameMath.randomInt(1, intMaxNum/2);
      let haveCard = gameCard.filter((v) => v == rNum);
      
      while (haveCard.length > 1) {        
        rNum = GameMath.randomInt(1, intMaxNum/2);
        
        haveCard = gameCard.filter((v) => v == rNum);
      }

      gameCard.push(rNum);
    }

    return gameCard;
  }
}
