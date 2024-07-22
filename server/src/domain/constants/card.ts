import { Card } from '@entities/Card';
import { CardSuit, CardSymbol } from '@enums/card';

export const CARDS_NUMBER = 40;
export const ORDERED_CARDS: Card[] = [
  {
    id: '00',
    value: 0,
    drawValue: 0,
    symbol: CardSymbol.Four,
    suit: CardSuit.Diamonds,
  },
  {
    id: '01',
    value: 0,
    drawValue: 1,
    symbol: CardSymbol.Four,
    suit: CardSuit.Spades,
  },
  {
    id: '02',
    value: 0,
    drawValue: 2,
    symbol: CardSymbol.Four,
    suit: CardSuit.Hearts,
  },
  {
    id: '03',
    value: 1,
    drawValue: 3,
    symbol: CardSymbol.Five,
    suit: CardSuit.Diamonds,
  },
  {
    id: '04',
    value: 1,
    drawValue: 4,
    symbol: CardSymbol.Five,
    suit: CardSuit.Spades,
  },
  {
    id: '05',
    value: 1,
    drawValue: 5,
    symbol: CardSymbol.Five,
    suit: CardSuit.Hearts,
  },
  {
    id: '06',
    value: 1,
    drawValue: 6,
    symbol: CardSymbol.Five,
    suit: CardSuit.Clubs,
  },
  {
    id: '07',
    value: 2,
    drawValue: 7,
    symbol: CardSymbol.Six,
    suit: CardSuit.Diamonds,
  },
  {
    id: '08',
    value: 2,
    drawValue: 8,
    symbol: CardSymbol.Six,
    suit: CardSuit.Spades,
  },
  {
    id: '09',
    value: 2,
    drawValue: 9,
    symbol: CardSymbol.Six,
    suit: CardSuit.Hearts,
  },
  {
    id: '10',
    value: 2,
    drawValue: 10,
    symbol: CardSymbol.Six,
    suit: CardSuit.Clubs,
  },
  {
    id: '11',
    value: 3,
    drawValue: 11,
    symbol: CardSymbol.Seven,
    suit: CardSuit.Spades,
  },
  {
    id: '12',
    value: 3,
    drawValue: 12,
    symbol: CardSymbol.Seven,
    suit: CardSuit.Clubs,
  },
  {
    id: '13',
    value: 4,
    drawValue: 13,
    symbol: CardSymbol.Queen,
    suit: CardSuit.Diamonds,
  },
  {
    id: '14',
    value: 4,
    drawValue: 14,
    symbol: CardSymbol.Queen,
    suit: CardSuit.Spades,
  },
  {
    id: '15',
    value: 4,
    drawValue: 15,
    symbol: CardSymbol.Queen,
    suit: CardSuit.Hearts,
  },
  {
    id: '16',
    value: 4,
    drawValue: 16,
    symbol: CardSymbol.Queen,
    suit: CardSuit.Clubs,
  },
  {
    id: '17',
    value: 5,
    drawValue: 17,
    symbol: CardSymbol.Jack,
    suit: CardSuit.Diamonds,
  },
  {
    id: '18',
    value: 5,
    drawValue: 18,
    symbol: CardSymbol.Jack,
    suit: CardSuit.Spades,
  },
  {
    id: '19',
    value: 5,
    drawValue: 19,
    symbol: CardSymbol.Jack,
    suit: CardSuit.Hearts,
  },
  {
    id: '20',
    value: 5,
    drawValue: 20,
    symbol: CardSymbol.Jack,
    suit: CardSuit.Clubs,
  },
  {
    id: '21',
    value: 6,
    drawValue: 21,
    symbol: CardSymbol.King,
    suit: CardSuit.Diamonds,
  },
  {
    id: '22',
    value: 6,
    drawValue: 22,
    symbol: CardSymbol.King,
    suit: CardSuit.Spades,
  },
  {
    id: '23',
    value: 6,
    drawValue: 23,
    symbol: CardSymbol.King,
    suit: CardSuit.Hearts,
  },
  {
    id: '24',
    value: 6,
    drawValue: 24,
    symbol: CardSymbol.King,
    suit: CardSuit.Clubs,
  },
  {
    id: '25',
    value: 7,
    drawValue: 25,
    symbol: CardSymbol.Ace,
    suit: CardSuit.Diamonds,
  },
  {
    id: '26',
    value: 7,
    drawValue: 26,
    symbol: CardSymbol.Ace,
    suit: CardSuit.Hearts,
  },
  {
    id: '27',
    value: 7,
    drawValue: 27,
    symbol: CardSymbol.Ace,
    suit: CardSuit.Clubs,
  },
  {
    id: '28',
    value: 8,
    drawValue: 28,
    symbol: CardSymbol.Two,
    suit: CardSuit.Diamonds,
  },
  {
    id: '29',
    value: 8,
    drawValue: 29,
    symbol: CardSymbol.Two,
    suit: CardSuit.Spades,
  },
  {
    id: '30',
    value: 8,
    drawValue: 30,
    symbol: CardSymbol.Two,
    suit: CardSuit.Hearts,
  },
  {
    id: '31',
    value: 8,
    drawValue: 31,
    symbol: CardSymbol.Two,
    suit: CardSuit.Clubs,
  },
  {
    id: '32',
    value: 9,
    drawValue: 32,
    symbol: CardSymbol.Three,
    suit: CardSuit.Diamonds,
  },
  {
    id: '33',
    value: 9,
    drawValue: 33,
    symbol: CardSymbol.Three,
    suit: CardSuit.Spades,
  },
  {
    id: '34',
    value: 9,
    drawValue: 34,
    symbol: CardSymbol.Three,
    suit: CardSuit.Hearts,
  },
  {
    id: '35',
    value: 9,
    drawValue: 35,
    symbol: CardSymbol.Three,
    suit: CardSuit.Clubs,
  },
  {
    id: '36',
    value: 10,
    drawValue: 36,
    symbol: CardSymbol.Seven,
    suit: CardSuit.Diamonds,
  },
  {
    id: '37',
    value: 11,
    drawValue: 37,
    symbol: CardSymbol.Ace,
    suit: CardSuit.Spades,
  },
  {
    id: '38',
    value: 12,
    drawValue: 38,
    symbol: CardSymbol.Seven,
    suit: CardSuit.Hearts,
  },
  {
    id: '39',
    value: 13,
    drawValue: 39,
    symbol: CardSymbol.Four,
    suit: CardSuit.Clubs,
  },
];

export function lastPickShuffle(deck: Card[]) {
  [deck[0], deck[deck.length - 1]] = [deck[deck.length - 1], deck[0]];
  return deck;
}

export function shuffle(deck: Card[]) {
  let currentIndex = deck.length;
  let randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex > 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    [deck[currentIndex], deck[randomIndex]] = [
      deck[randomIndex],
      deck[currentIndex],
    ];
  }

  return deck;
}
