import { LobbiesController } from '@controllers/LobbiesController';
import { PlayersController } from '@controllers/PlayersController';
import { redis } from '@infra/databases/redis';
import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => {
  return res.json('Hello World');
});

routes.get('/healthcheck', async (req, res) => {
  const redisHealth = await redis.ping();

  if (!redisHealth || redisHealth !== 'PONG') {
    return res.status(500).json('Redis Unhealthy');
  }

  return res.status(200).json('Healthy');
});

const playersController = new PlayersController();
routes.get('/players/online', playersController.online);
routes.post('/players/login', playersController.login);

const lobbiesController = new LobbiesController();
routes.get('/lobbies', lobbiesController.list);
routes.post('/lobbies/join', lobbiesController.join);
routes.get('/lobbies/populate/:quantity', lobbiesController.populate);
routes.get('/lobbies/:lobbyId/:playerId', lobbiesController.get);

export { routes };
