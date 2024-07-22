import { Player } from "./player";
import { Lobby } from "./lobby";

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
  login: (player: object) => void;
  joinLobby: (event: object) => void;
}

export interface SocketData {
  name: string;
  age: number;
}
