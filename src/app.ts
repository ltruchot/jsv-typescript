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

// extends, protected, super for methods & constructor
const richPlayer = new RichPlayer('Mario', 44, 1200);
console.log(richPlayer);

// abstract
const poorPlayer = new PoorPlayer('Luigi', 46, false);

// IMPLEMENTS & THIS
// whats about composition over inheritance
// implements

import { IGameItem } from './game.model';
class Enemy implements IGameItem {
  type = 'IA Player';
  logType() {
    return this.type;
  }
}

const enemy = new Enemy();
console.log(enemy);

// inheritance mutitple is possible with mixin "mecanics" (class + implements)

// this & noImplicitThis
function displayType(this: Enemy, enemyName) {
  return enemyName + ' type is:' + this.type;
}
console.log(displayType.call(enemy, 'Warrio'));

const btn = document.createElement('button');
btn.innerText = 'Launch game';
btn.id = 'launch';
document.body.appendChild(btn);

function clicked(this: HTMLButtonElement, e: MouseEvent) {
  console.log(this.id);
}
btn.addEventListener('click', clicked);
