import { GameMath } from "../types/math/gameMath.ts";

export class CardsGenerator {
  
}

const xlen = 10;
const ylen = 2;

const minRNum = 0;
const maxRNum = xlen;

export function generateGame() {
  const gameCard: number[][] = []
  
  for (let iy = 0; iy < ylen; iy++) {
    gameCard[iy] = [];

    for (let i = 0; i < xlen; i++) {     
      let rNum = GameMath.randomInt(minRNum, maxRNum);
      let haveCard = gameCard[iy]!.find((v) => v == rNum) != undefined;
      
      while(haveCard){
        rNum = GameMath.randomInt(minRNum, maxRNum)
        haveCard = gameCard[iy]!.find((v) => v == rNum) != undefined;
      }
      
      gameCard[iy]!.push(rNum);
    }
  }

  return gameCard;
}
