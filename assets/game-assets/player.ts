export class Player { 
  name: string = "";
  cardsChoosed: number[] = []; // every sequal of chose user did (and not failed)

  constructor({name}: {name: string}) {
    this.name = name;
  }
}