import { generateGame } from "./assets/game-assets/gameGeranator.ts";
import type { startGameType } from "./assets/types/types.ts";

export class memoryGame {
  p1 = "p1";
  p2 = "p2";

  startGame({p1, p2}: startGameType) {
    this.p1 = p2;
    this.p2 = p2;
  }
}


console.log(generateGame());
