import { Game } from '@entities/Game';
import { Player } from '@entities/Player';

const game = new Game();
const p1: Player = { id: 'p1', socketId: 'p1', username: 'player', cards: [] };
const p2: Player = { id: 'p2', socketId: 'p2', username: 'player', cards: [] };
const p3: Player = { id: 'p3', socketId: 'p3', username: 'player', cards: [] };
const p4: Player = { id: 'p4', socketId: 'p4', username: 'player', cards: [] };
const p5: Player = { id: 'p5', socketId: 'p5', username: 'player', cards: [] };

game.addPlayer(p1);
game.addPlayer(p2);
game.addPlayer(p3);
game.addPlayer(p4);
game.addPlayer(p5);

const team1 = { players: [p1, p2], score: 0 };
const team2 = { players: [p3, p4], score: 0 };

const rounds = ['', '', ''];

while (team1.score < 12 && team2.score < 12) {
  rounds.forEach(() => {
    game.players.forEach(player => {
      game.givePlayerCards(player.id);
    });
  });

  console.log('ROUND');

  game.printPlayersCards();
  console.log('');

  team1.score += 2;
  game.restartRound();
}
