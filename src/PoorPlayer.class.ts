import { Player } from './Player.class';

export class PoorPlayer extends Player {
  constructor(name: string, age: number, banned: boolean) {
    super(name, age, banned);
    this.isRich = false;
  }
}
