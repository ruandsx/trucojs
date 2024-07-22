import { CardSuit, CardSymbol } from '@enums/card';

export interface Card {
  id: string;
  value: number;
  drawValue: number;
  symbol: CardSymbol;
  suit: CardSuit;
  especial?: boolean;
}
