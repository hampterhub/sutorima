import { createServer } from 'express-zod-api';
import config from './config';
import routing from './routing';

createServer(config, routing)
  .catch((err) => console.error(err))
  .finally(() => {
    console.log('Finished');
  })
