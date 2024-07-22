import { randomUUID } from 'crypto';
import { shuffle, ORDERED_CARDS } from '@constants/card';
import { GAME_MAX_PLAYERS } from '@constants/game';
import { Card } from './Card';
import { Lobby } from './Lobby';
import { Player } from './Player';

export class Game implements Lobby {
  id: string;
  round: number;
  players: Player[];
  cards: Card[];

  constructor() {
    this.id = randomUUID();
    this.round = 0;
    this.players = [];
    this.cards = shuffle(shuffle([...ORDERED_CARDS]));
  }

  addPlayer(player: Player) {
    if (this.players.length < GAME_MAX_PLAYERS) {
      this.players.push(player);
      console.log(`Player ${player.id} added in game ${this.id}.`);
    } else {
      console.log(`Game ${this.id} is full.`);
    }
  }

  givePlayerCards(playerId: string) {
    const playerIndex = this.players.findIndex(
      player => player.id === playerId
    );

    // TODO: algorithm to pick 3 random cards, and give to player.
    const card1 = this.cards.shift() as Card;
    const card2 = this.cards.shift() as Card;
    const card3 = this.cards.shift() as Card;

    this.players[playerIndex].cards = [card1, card2, card3];
  }

  shuffleCards() {
    this.cards = shuffle(shuffle(shuffle(this.cards)));
  }

  restartRound() {
    this.cards = shuffle(shuffle([...ORDERED_CARDS]));
    this.shuffleCards();

    this.players.forEach(player => {
      player.cards = [];
    });
  }

  printPlayersCards() {
    this.players.forEach(player => {
      console.log(
        player.id,
        player.cards.map(card => `${card.symbol} ${card.suit}`)
      );
    });
  }
}
