// ENUMS
// A real object
// reverse map for numeric values
enum EPlayerTypes {
  Unknown,
  Poor,
  Rich
}
console.log('index:', EPlayerTypes.Poor, 'value:', EPlayerTypes[1]);
const enum EDifficulties {
  Min = 'easy',
  Normal = 'normal',
  Hard = 'hard',
  Max = 'iron man'
}
console.log();
interface IHumanPlayer {
  type: EPlayerTypes;
  difficulties: EDifficulties;
}
const human: IHumanPlayer = {
  type: EPlayerTypes.Poor,
  difficulties: EDifficulties.Hard
};
console.log(human);

// TYPEOF && KEYOF && INTERSECTION
// pure js
const score = 5;
console.log(typeof score);
// typescript special use of typeof for aot typing
const player1 = {
  id: 'abc',
  name: 'Peach',
  age: 31,
  banned: false
};
type Player = typeof player1;
let player2: Player;
player2 = {
  id: 'def',
  name: 'Toad',
  age: 15,
  banned: true
};

// keyof
type PlayerKeys = keyof Player;
function pluckPlayer(obj: Player, key: keyof Player) {
  return obj[key];
}
pluckPlayer(player1, 'name');

// intersection type
const darkPeach: Player & { dark: boolean } = {
  ...player1,
  dark: true
};
type DarkPlayer = typeof darkPeach;

// GENERIC TYPES
// dynamic type
// Promise<T>, Observable<T>
class PlayerList<T> {
  private _list: Player[] = [];
  addPlayer(player: Player) {
    this._list = [...this._list, player];
  }
  getList(): Player[] {
    return this._list;
  }
}
const playerList = new PlayerList();
playerList.addPlayer(player1);
const allPlayers: Player[] = playerList.getList();
// what about a list of
// Put any everywhere ?
// or better, use a generic type <T>...

// mapped type with generics
// Mapped because every props get the same rule
// Readonly
const roPlayer = Object.freeze(player1);
// Partial
interface IPatchedPlayer {
  name?: string;
  age?: number;
}
const patchedPlayer1: IPatchedPlayer = {
  name: 'Dark Peach'
};
function patch(original: Player, patched: IPatchedPlayer | Partial<Player>) {
  return { ...original, ...patched };
}
console.log(patch(player1, patchedPlayer1));
// Required
// simply the contratry
function update(original: Player, updated: Required<Player>) {
  console.log('banned', updated.banned);
}
update(player1, { id: 'abc', age: 25, name: 'Peach', banned: false });
// Pick
// like a pluck or multiple pluck
function getPlayerLite(obj: Player): Pick<Player, 'name' | 'age'> {
  return { name: obj.name, age: obj.age };
}
function getPlayerLitev2({ name, age }: Player): Pick<Player, 'name' | 'age'> {
  return { name, age };
}
// Record
// entities/dictionnaly pattern
const players: Player[] = [player1, player2];
const playerEntities: Record<string, Player> = players.reduce((acc, curr) => {
  acc[curr.id] = curr;
  return acc;
}, {});
const copy: { [s: string]: Player } = playerEntities;
console.log(playerEntities);

// Smart typescript (conditionnal type guards)
// overloaded functions
// decorators
// DefinitelyTyped && @types
