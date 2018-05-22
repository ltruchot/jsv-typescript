// PRIMITIVE TYPES
// simplest way
let player1: string = 'Peach';
let age1: number = 26;
let isConnected1: boolean = true;
// /!\ WARNING: never use box/constructor types like String/Number/Boolean
let str: String = new String('test');
console.log(typeof str);
// smart error check & intellisense
// -- not ok
// if (player1 === isConnected1) {
// }
// isConnected1++;
// age1.split(',');
// --ok
let displayedAge = age1 + ' ans';
console.log(age1); // no more console interest !
// implicit type
let player2 = 'Mario';
let age2 = 26;
let isConnected = true;
// null & undefined authorized
player2 = null;
age2 = undefined;

// SPECIAL TYPES & IMPLICIT FEATURES
// any
let error;
error = 404;
error = true;
let specialError: any = new Error();
specialError = "C'est pas un bug c'est une feature";
// literal type + difference const/let double security + const initialization
// let mario: 'Mario' = 'Luigi';
const luigi = 'Luigi';

// FUNCTIONS
// return & params
function checkConnection() {
  return true;
}
isConnected = checkConnection();
function formatPlayerAge(age: number): string {
  return age + ' ans';
}
function formatPlayerName(name: number, age: number): string {
  const playerName = name;
  return 'Le joueur ' + name;
}
// special types
function changePlayerName(): void {
  player1 = 'Toad';
}
function forceError(): never {
  player2 = 'Koopa';
  throw new Error();
}
const launchGame: Function = () => console.log('launch !');
// @see noUnusedLocals, noImplicitAny, noUnusedParameters, strict mode...
// @see https://www.typescriptlang.org/docs/handbook/compiler-options.html

// UNION TYPE & TYPE KEYWORD
let antialiasing: 'x2' | 'x4' | 'x8' = 'x8';
// antialiasing = 'x16';
function chooseDifficulty(difficutly?: 'easy' | 'ironman'): 1 | 2 {
  return 'easy' ? 1 : 2;
}
// chooseDifficulty('ironmann');
// optional arg
chooseDifficulty();

// be DRY we the Type keyword (alias)
type aa = 'x2' | 'x4' | 'x8';
let myDifficulty: aa = 'x8';

const setAA = (level: aa): void => {
  if (level === 'x8') {
    window.cancelAnimationFrame(0);
  }
};
// no priority for type (& interface)

// ARRAY TYPES
// unordered types
const difficulties = ['easy', 'normal', 'hard', 'ironman'];
let antialiasings: number[];
antialiasings = [0, 2, 4, 8, 16];
const playerInfos = [
  true,
  'normal',
  16,
  null,
  { id: 10 },
  { name: 'peach' },
  { check: _ => console.log(_) }
];
let anyPlayerInfos: any[];

// ordered types (or tuple type)
let playerOptions: [number | null, string, boolean] = [8, 'easy', true];

// OBJECT TYPE INTRODUCTION
// infered
const options = { aa: true, level: 'easy' };
// manually typed
let player: { name: string; age: number };
player = { name: 'Peach', age: 31 };
// typed
type player = { name: string; age: number };
const players: player[] = [player];
// maybe a better way ???
