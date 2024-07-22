import { Player } from '@entities/Player';
import { redis } from '@infra/databases/redis';
import { REDIS_KEYS } from '@infra/databases/redis/keys';
import { io } from '@infra/http';
import { Request, Response } from 'express';

export class PlayersController {
  async online(
    req: Request,
    res: Response
  ): Promise<Response<{ players: Player[] }>> {
    const cachedOnlinePlayers = await redis.get(REDIS_KEYS.onlinePlayers);

    if (!cachedOnlinePlayers) {
      return res.json([]);
    }

    const players = JSON.parse(cachedOnlinePlayers) as Player[];

    return res.json(players);
  }

  async login(
    req: Request,
    res: Response
  ): Promise<Response<{ players: Player[] }>> {
    const player: Player = req.body.player;

    const { username, socketId } = player;

    const onlinePlayers = JSON.parse(
      (await redis.get(REDIS_KEYS.onlinePlayers)) || '[]'
    ) as Player[];

    const usernameAlreadyInUse = onlinePlayers.find(
      onlinePlayer => onlinePlayer.username === username
    );

    const socketIdAlreadyInUse = onlinePlayers.find(
      onlinePlayer => onlinePlayer.socketId === socketId
    );

    const isUserReconnection =
      usernameAlreadyInUse &&
      socketIdAlreadyInUse &&
      usernameAlreadyInUse.id === socketIdAlreadyInUse.id;

    if (usernameAlreadyInUse && !isUserReconnection) {
      return res.status(400).json({ message: 'Username already in use' });
    }

    if (socketIdAlreadyInUse && !isUserReconnection) {
      return res.status(400).json({ message: 'SocketId already in use' });
    }

    if (!isUserReconnection) {
      onlinePlayers.push(player);
    }

    await redis.set(REDIS_KEYS.onlinePlayers, JSON.stringify(onlinePlayers));

    io.emit('onlinePlayers', onlinePlayers);

    return res.json({ players: onlinePlayers });
  }
}
