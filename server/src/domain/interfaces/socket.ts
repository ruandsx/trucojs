import { Lobby } from '@entities/Lobby';
import { Player } from '@entities/Player';
import { Server, Socket } from 'socket.io';

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;

  //Players
  onlinePlayers: (players: Player[]) => void;

  //Lobbies
  allLobbies: (lobbies: Lobby[]) => void;
  loginError: (message: string) => void;
}

export interface ClientToServerEvents {
  login: (player: Player) => void;
  joinLobby: (event: object) => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  name: string;
  age: number;
}

export type SocketServer = Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;

export type SocketClient = Socket<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>;
