export class Player {
  public name: string;
  private _banned: boolean;

  private _level: string;
  readonly type: string = 'Human Player';
  protected isRich: boolean = false;
  static levels: { [s: string]: string } = {
    n: 'noob',
    a: 'average',
    m: 'master'
  };
  constructor(name: string, public age: number, banned?: boolean) {
    this.name = name;
    this._banned = banned;
  }
  getStatus(): boolean {
    return this._banned;
  }
  get formattedAge(): string {
    return this.age + ' ans';
  }
  set level(lvl: string) {
    this._level = Player.levels[lvl];
  }
  get level(): string {
    return this._level;
  }
}
