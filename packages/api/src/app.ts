import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
// import { conectDB } from './lib/db';
import { mainRouter } from './routers/mainRouter';

export const mainApp: FastifyPluginAsync = async (app) => {
  // conectDB();

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });

  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(null, false);
    },
  });

  app.register(mainRouter);
};
