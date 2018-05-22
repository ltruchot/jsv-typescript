import { Player } from './Player.class';
import { RichPlayer } from './RichPlayer.class';
import { PoorPlayer } from './PoorPlayer.class';

// CLASSES
// class & constructor
// properties: declare, public, private, readonly, static
const player = new Player('Peach', 31, true);
// player.type = 'test';
// player.banned = 'test';

// setters & getters
console.log(player.formattedAge);

player.level = 'n';
console.log(player.level);

// extends & protected
const richPlayer = new RichPlayer('Mario', 44, 1200);
console.log(richPlayer);

// abstract
const poorPlayer = new PoorPlayer('Luigi', 46, false);

// implements
