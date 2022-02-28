import fastify from 'fastify';
import { mainApp } from './app';
import { PORT } from './config';
import pino from 'pino';
import fastifyCron from 'fastify-cron';
import { getGasolineras } from './feed/getGasolineras';

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

server.register(fastifyCron, {
  jobs: [
    {
      cronTime: '2 * * * *', // Everyday at midnight UTC
      onTick: async (server) => {
        await getGasolineras();
      },
    },
  ],
});

const start = async () => {
  try {
    await server.listen(PORT);
    server.cron.startAllJobs();
    server.log.info('listening at port: ', PORT);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
