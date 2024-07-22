import { Player } from '@entities/Player';
import { redis } from '@infra/databases/redis';
import { REDIS_KEYS } from '@infra/databases/redis/keys';
import { io } from '@infra/http';
import { SocketClient } from '@interfaces/socket';

const removeDisconnectedPlayerFromOnlineList = async (socket: SocketClient) => {
  const currentOnlinePlayers = JSON.parse(
    (await redis.get(REDIS_KEYS.onlinePlayers)) || '[]'
  ) as Player[];

  const onlinePlayers = currentOnlinePlayers.filter(
    player => player.socketId !== socket.id
  );

  await redis.set(REDIS_KEYS.onlinePlayers, JSON.stringify(onlinePlayers));

  io.emit('onlinePlayers', onlinePlayers);
};

io.on('connection', socket => {
  console.log(socket.id, 'connected');

  socket.on('disconnect', async (reason, description) => {
    console.log(socket.id, reason, description);
    await removeDisconnectedPlayerFromOnlineList(socket);
  });

  socket.on('error', async error => {
    console.error(socket.id, 'error', error);
    await removeDisconnectedPlayerFromOnlineList(socket);
  });

  socket.on('joinLobby', event => {
    console.log(event);
  });
});
