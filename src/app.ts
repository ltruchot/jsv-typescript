// COMPLEX OBJECT, FUNCTION TYPE & INTERFACE
// model import/export
import { Player, PlayerService, IRequestService, IGame } from './common.model';

const allPlayers: Player[] = [
  { name: 'Peach', age: 31 },
  { name: 'Mario', age: 44 }
];
const playerService: PlayerService = {
  id: 'Player Service',
  getPlayer: name => allPlayers.find(curr => name === curr.name)
};

const player: Player = playerService.getPlayer('Mario');
console.log(player);

// an interface for our services
const requestService: IRequestService = {
  id: 'HTTP Service',
  get: (): string => JSON.parse('response')
};
// Always use Interface of Objects

// nested interface
export const game: IGame = {
  players: allPlayers,
  playerService,
  requestService,
  history: {}
};

// optional property
game.isRunning = true;

// index signature
game.history.A0 = 'Peach join the game';
game.history.A1 = 'Peach score is now 1';
game.history.A2 = 'Mario join the game';

// GENERIC TYPE
