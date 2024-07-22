import 'dotenv/config';
import '@infra/websocket';

import { config } from '@infra/config';
import { httpServer } from '@infra/http';

httpServer.listen(config.app.port, config.app.host, () => {
  console.log(`server listening on ${config.app.host}:${config.app.port}`);
});
