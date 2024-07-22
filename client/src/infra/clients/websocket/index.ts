import { config } from "@/infra/config";
import {
  ClientToServerEvents,
  ServerToClientEvents,
} from "@/interfaces/websocket";
import { io, Socket } from "socket.io-client";

export const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
  config.server.url,
  {
    retries: 0,
    auth: { test: "" },
  }
);
