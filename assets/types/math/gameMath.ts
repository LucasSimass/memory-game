export class GameMath {
  /** 
   * return an integer 
   * 
   * Example: randomInt(1, 10) => 5;
  */
  static randomInt (min: number, max: number){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
