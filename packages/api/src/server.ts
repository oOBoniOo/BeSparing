import fastify from 'fastify';
import { mainApp } from './app';
import { PORT } from './config';
import pino from 'pino';

const logger = pino({
  name: 'Fastify-Pretty-Config',
  transport: {
    target: 'pino-pretty',
    options: {
      // translateTime: true,
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname,reqId',
      colorize: true,
    },
  },
});

const server = fastify({
  logger,
  disableRequestLogging: true,
});

server.register(mainApp);

const start = async () => {
  try {
    await server.listen(PORT, '0.0.0.0');
    console.log('listening at port: ', PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
