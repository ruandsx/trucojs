export type CardSymbol =
  | '4'
  | '5'
  | '6'
  | '7'
  | 'Q'
  | 'J'
  | 'K'
  | 'A'
  | '2'
  | '3';

export type CardSuit = 'diamonds' | 'spades' | 'hearts' | 'clubs';

export type DealerAlgorithm = 'top3' | 'top1' | 'down3' | 'down1' | 'random';
