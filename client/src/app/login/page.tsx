"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

import { useAuth } from "@/contexts/auth";
import { socket } from "@/infra/clients/websocket";
import { api } from "@/infra/clients/api";
import { Player } from "@/interfaces/player";

import { Card, OnlineCounter, OnlinePlayers } from "./styled";
import Container from "@/components/Container";

export default function SignIn() {
  const { push } = useRouter();
  const { user, signIn, signOut } = useAuth();
  const [username, setUsername] = useState<string>();
  const [avatar, setAvatar] = useState<string>();
  const [onlinePlayers, setOnlinePlayers] = useState<Player[]>([]);
  const [isUserLogged, setisUserLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  socket.on("onlinePlayers", (players) => {
    setOnlinePlayers(players);
  });

  useEffect(() => {
    if (socket.disconnected) {
      socket.connect();
    }

    if (user) {
      if (socket.id === user.socketId) {
        push("/lobbies");
        return;
      }
      socket.disconnect();
      signOut();
      return;
    }
  }, [user, push, signOut]);

  useEffect(() => {
    const getOnlineUsers = async () => {
      const { data: players } = await api.get<Player[]>("/players/online");
      setOnlinePlayers(players);
    };

    getOnlineUsers();
  }, []);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const key = event.target.name;
      const inputValue = event.target.value;

      if (key === "username") {
        const usernameFormatted = inputValue.replace(/[^\w.]|_/g, "");
        setUsername(usernameFormatted);
      } else {
        setAvatar(inputValue);
      }
    },
    []
  );

  const handleConnection = useCallback(async () => {
    setIsLoading(true);

    if (!username) {
      alert("User must be at least 1 character");
      setIsLoading(false);
      return;
    }

    try {
      const player = {
        socketId: socket.id as string,
        id: `${username}-${socket.id}`,
        username,
        avatar,
      };

      await api.post("/players/login", { player });

      setisUserLogged(true);
      signIn(player);
      push("/lobbies");
    } catch (error) {
      const err = error as AxiosError<{ message: string }>;
      alert(err.response?.data?.message || err.message);
    } finally {
      setIsLoading(false);
    }
  }, [username, avatar, signIn, push]);

  return (
    <Container>
      <Card>
        <h1>Login</h1>

        <input
          required
          type="text"
          name="username"
          placeholder="Nome de usuário"
          value={username}
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          name="avatar"
          placeholder="Link do avatar"
          value={avatar}
          onChange={handleInputChange}
        ></input>

        <button disabled={isUserLogged || isLoading} onClick={handleConnection}>
          Entrar
        </button>
      </Card>
      <OnlineCounter>{onlinePlayers.length} Online</OnlineCounter>
      <OnlinePlayers>
        {onlinePlayers.map((player) => {
          return (
            <span key={player.id}>
              {player.username} - {player.socketId}
            </span>
          );
        })}
      </OnlinePlayers>
    </Container>
  );
}
