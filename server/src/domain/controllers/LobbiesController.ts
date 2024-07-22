import { Lobby } from '@entities/Lobby';
import { Player } from '@entities/Player';
import { redis } from '@infra/databases/redis';
import { REDIS_KEYS } from '@infra/databases/redis/keys';
import { io } from '@infra/http';
import { Request, Response } from 'express';

export class LobbiesController {
  async list(
    req: Request,
    res: Response
  ): Promise<Response<{ lobbies: Lobby[] }>> {
    const allLobbies = await redis.get(REDIS_KEYS.allLobbies);

    if (!allLobbies) {
      return res.json([]);
    }

    const lobbies = JSON.parse(allLobbies) as Lobby[];

    return res.json(lobbies);
  }

  async get(
    req: Request,
    res: Response
  ): Promise<Response<{ lobbies: Lobby[] }>> {
    const { lobbyId, playerId } = req.params;

    if (!lobbyId || !playerId) {
      return res.status(400).json({ message: 'Validation Error' });
    }

    const allLobbies = await redis.get(REDIS_KEYS.allLobbies);

    if (!allLobbies) {
      return res.status(400).json({ message: 'No lobbies found' });
    }

    const lobbies = JSON.parse(allLobbies) as Lobby[];

    const selectedLobby = lobbies.find(lobby => lobby.id === lobbyId);

    if (!selectedLobby) {
      return res.status(400).json({ message: 'Lobby not found' });
    }

    const isPlayerInSelectedLobby = selectedLobby.players.find(
      player => player.id === playerId
    );

    if (!isPlayerInSelectedLobby) {
      return res.status(400).json({ message: 'Player not in lobby' });
    }

    return res.json(selectedLobby);
  }

  async join(
    req: Request,
    res: Response
  ): Promise<Response<{ players: Player[] }>> {
    const player: Player = req.body.player;
    const lobbyId: string = req.body.lobbyId;

    if (!player) {
      return res.status(400).json({ message: 'Invalid player info' });
    }

    const lobbies = JSON.parse(
      (await redis.get(REDIS_KEYS.allLobbies)) || '[]'
    ) as Lobby[];

    const selectedLobbyKey = `${REDIS_KEYS.lobby}${lobbyId}`;

    const selectedLobby = JSON.parse(
      (await redis.get(selectedLobbyKey)) || ''
    ) as Lobby;

    if (!selectedLobby) {
      return res.status(400).json({ message: 'This lobby does not exists' });
    }

    if (selectedLobby.players.length > 3) {
      return res.status(400).json({ message: 'This lobby is full' });
    }

    const lobbyIndex = lobbies.findIndex(lobby => lobby.id === lobbyId);
    const updatedLobbys = [...lobbies];

    updatedLobbys[lobbyIndex] = {
      ...updatedLobbys[lobbyIndex],
      players: [...updatedLobbys[lobbyIndex].players, player],
    };

    await redis.set(
      selectedLobbyKey,
      JSON.stringify(updatedLobbys[lobbyIndex])
    );
    await redis.set(REDIS_KEYS.allLobbies, JSON.stringify(updatedLobbys));

    io.emit('allLobbies', updatedLobbys);

    return res.json({ lobby: selectedLobby });
  }

  async populate(
    req: Request,
    res: Response
  ): Promise<Response<{ lobbies: Lobby[] }>> {
    const lenght = Number(req.params.quantity);

    const defaultLobbys = Array.from({ length: lenght || 2 }).map(
      (_, index) => {
        const lobbyId = `${index + 1}`;
        const lobbyKey = `${REDIS_KEYS.lobby}${lobbyId}`;
        const lobby: Lobby = {
          id: lobbyId,
          players: [],
        };

        redis.set(lobbyKey, JSON.stringify(lobby));
        return lobby;
      }
    );

    await redis.set(REDIS_KEYS.allLobbies, JSON.stringify(defaultLobbys));

    return res.json(defaultLobbys);
  }
}
