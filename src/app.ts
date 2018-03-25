// ************************* DISCOVERING TYPESCRIPT **************************/
// ***************************************************************************/

// FOREWORDS
// reach a pro level for any kind of TS project
// being able to begin with angular without any lack

// ANGULAR ORIENTED TRAINING
// Angular is written in TypeScript
// @see https://github.com/n-a-n/ngx-sandbox/blob/master/src/app/core/services/api.service.ts
// Typescript is awesome for huge JS projects

// INSTALL TYPESCRIPT
// install node, @see https://nodejs.org/en/
// npm i -g typescript
// run tsc in a folder with *.ts files
// @see tsconfig.json

// WHAT IS TYPESCRIPT ?
// Open source JavaScript transpiler, maintained by Microsoft
// * ES5 complient
var players = ['Mario', 'Luigi', 'Peach'];
function launchGame(playerName) {
  console.log(playerName + ', lance la partie !');
}
launchGame(players[0]);
// run TS on "npm start"
// * ES6 complient
const playGame = playerName => console.log(`${playerName}, lance la partie !`);
playGame(players[1]);

// * ESNext complient
async function welcomePlayer(playerName) {
  if (players.includes(playerName)) {
    playGame(playerName);
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('La partie commence !');
  }
}
welcomePlayer('Peach');
// and decorators, like @Component in Angular
// and a lot more like Enums, Interfaces, etc.

// * Static types
const playerName: string = 'Enzo';
function stopGame(player: string) {
  console.log(`Game Over ${player}`);
  return false;
}
stopGame(playerName);
// @see https://github.com/n-a-n/ngx-sandbox/blob/master/src/app/core/services/api.service.ts

// WHY IT'S AWESOME ?
// IDE intellisense & support
// live in the future, with an always compatible JavaScript code
// implicit documentation for everything
// Get types for any existing framework/lib
// learning curve hardness is your decision
// compilation && errors
// common readable base of work, for my team and the future me

// SOME CONS
// Don't forget JavaScript, especially ES5
// JS is NOT Java (class/static types oriented), JavaScript is NOT Golang (comp)
// Microsoft isn't always trusted in the JavaScript developer community
// A lot of breaking change since the beginning
