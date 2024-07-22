"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { useAuth } from "@/contexts/auth";
import { socket } from "@/infra/clients/websocket";
import { api } from "@/infra/clients/api";
import { Lobby } from "@/interfaces/lobby";

import { Container } from "./styled";
import LobbyCard from "@/components/LobbyCard";
import { getCoreRoutes } from "@/infra/routes";

const { lobby: lobbyRoute } = getCoreRoutes();

export default function Lobbies() {
  const { push } = useRouter();
  const { user, signOut } = useAuth();
  const [lobbies, setLobbies] = useState<Lobby[]>([]);

  socket.on("allLobbies", (lobbies) => {
    setLobbies(lobbies);
  });

  useEffect(() => {
    const getLobbies = async () => {
      const { data: lobbies } = await api.get<Lobby[]>("/lobbies");
      setLobbies(lobbies);
    };

    getLobbies();
  }, []);

  const handleJoinLobby = useCallback(
    async (lobby: Lobby) => {
      if (!user || (user && socket.id !== user.socketId)) {
        socket.disconnect();
        signOut();
        alert("Connection failed");
        push("/login");
        return;
      }

      try {
        const player = user;
        await api.post("/lobbies/join", { lobbyId: lobby.id, player });
        push(`${lobbyRoute}${lobby.id}`);
      } catch (error) {
        const err = error as AxiosError<{ message: string }>;
        alert(err.response?.data?.message || err.message);
      }
    },
    [user, signOut, push]
  );

  return (
    <Container>
      {lobbies.map((lobby) => (
        <LobbyCard
          key={lobby.id}
          lobby={lobby}
          handleJoinLobby={handleJoinLobby}
        />
      ))}
    </Container>
  );
}
