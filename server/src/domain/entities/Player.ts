import { Card } from './Card';

export interface Player {
  id: string;
  socketId: string;
  username: string;
  cards: Card[];
  avatar?: string;
}
