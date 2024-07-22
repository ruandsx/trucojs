import { SyntheticEvent, useCallback } from "react";

import defaultAvatar from "@/images/default-avatar.png";

import { LobbyCardProps } from "./LobbyCard.types";
import {
  Card,
  CardDescription,
  CardContent,
  JoinButton,
  Description,
  ArrowRightIcon,
  PlayerInfo,
  PlayerAvatar,
  PlayerUsername,
} from "./LobbyCard.styled";

const LobbyCard = ({ lobby, handleJoinLobby }: LobbyCardProps) => {
  const handleInvalidAvatarSource = useCallback(
    (event: SyntheticEvent<HTMLImageElement, Event>) => {
      event.currentTarget.src = defaultAvatar.src;
    },
    []
  );

  return (
    <Card key={lobby.id}>
      <CardDescription>
        <Description>
          <p>Mesa {lobby.id}</p>
          <span>{lobby.players.length} jogadores . Truco Mineiro</span>
        </Description>
        <JoinButton onClick={() => handleJoinLobby(lobby)}>
          <ArrowRightIcon />
        </JoinButton>
      </CardDescription>
      <CardContent>
        {lobby.players.map((player) => (
          <PlayerInfo key={player.id}>
            <PlayerAvatar
              src={player.avatar}
              onError={handleInvalidAvatarSource}
            />
            <PlayerUsername>{player.username} </PlayerUsername>
          </PlayerInfo>
        ))}
      </CardContent>
    </Card>
  );
};

export default LobbyCard;
