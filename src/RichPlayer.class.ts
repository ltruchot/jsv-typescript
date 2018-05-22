import { Player } from './Player.class';

export class RichPlayer extends Player {
  constructor(name: string, age: number, public amount: number) {
    super(name, age, false);
    // this._banned = true;
    this.isRich = true;
  }
}
