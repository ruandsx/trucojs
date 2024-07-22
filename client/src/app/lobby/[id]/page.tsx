"use client";

import { useEffect, useState } from "react";
import { LobbyProps } from "./types";
import { Lobby } from "@/interfaces/lobby";
import { api } from "@/infra/clients/api";
import { useAuth } from "@/contexts/auth";
import Container from "@/components/Container";
import LobbyCard from "@/components/LobbyCard";
import { socket } from "@/infra/clients/websocket";

export default function Lobby({ params }: LobbyProps) {
  const [lobby, setLobby] = useState<Lobby>();
  const { user } = useAuth();

  socket.on("allLobbies", (lobbies: Lobby[]) => {
    const currentLobby = lobbies.find((lobby) => lobby.id === params.id);
    setLobby(currentLobby);
  });

  useEffect(() => {
    const getLobby = async () => {
      const { data: lobby } = await api.get<Lobby>(
        `/lobbies/${params.id}/${user?.id}`
      );
      setLobby(lobby);
    };

    if (user) {
      getLobby();
    }
  }, [params.id, user]);

  return (
    <Container>
      {lobby && (
        <div>
          <h1>Mesa {params.id}</h1>
          <h1>Jogadores: {lobby?.players.length}</h1>
          <LobbyCard lobby={lobby} handleJoinLobby={() => {}} />
        </div>
      )}
    </Container>
  );
}
