import { createServer } from 'node:http';
import { config } from '@infra/config';
import { SocketServer } from '@interfaces/socket';
import cors from 'cors';
import express from 'express';
import { Server } from 'socket.io';
import { routes } from './routes';

const { allowedOrigins, allowedHeaders } = config.cors;

const app = express();
app.use(cors({ origin: allowedOrigins, allowedHeaders }));
app.use(express.json());
app.use('/api', routes);

const httpServer = createServer(app);

const io: SocketServer = new Server(httpServer, {
  cors: {
    origin: allowedOrigins,
    allowedHeaders,
  },
});

export { httpServer, io };
