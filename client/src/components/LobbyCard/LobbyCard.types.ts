import { Lobby } from "@/interfaces/lobby";

export type LobbyCardProps = {
  lobby: Lobby;
  handleJoinLobby: (lobby: Lobby) => void;
};
