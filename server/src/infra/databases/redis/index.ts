import { config } from '@infra/config';
import { Redis } from 'ioredis';

export const redis = new Redis({
  host: config.database.redis.host,
  maxRetriesPerRequest: 10,
  maxLoadingRetryTime: 5000,
});

redis.on('connect', () => {
  console.log('Redis connection stablished');
});

redis.on('ready', () => {
  console.log('Redis connection ready');
});

redis.on('end', () => {
  console.log('Redis connection ended by server');
});
