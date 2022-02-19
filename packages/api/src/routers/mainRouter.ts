import { FastifyPluginAsync } from 'fastify';

export const mainRouter: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({ hello: 'API principal de BeSparing' }));
};
