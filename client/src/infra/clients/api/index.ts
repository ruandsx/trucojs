import { config } from "@/infra/config";
import axios from "axios";

export const api = axios.create({
  baseURL: `${config.server.url}/api`,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
