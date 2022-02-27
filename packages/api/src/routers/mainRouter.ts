import { FastifyPluginAsync } from 'fastify';

export const mainRouter: FastifyPluginAsync = async (app) => {
  app.get('/', async () => ({ hello: 'API principal de BeSparing' }));

  // app.get('/verify', {
  //   handler(request, reply) {
  //     reply.send(request.user);
  //   },
  //   preValidation: app.authenticate,
  // });
};
