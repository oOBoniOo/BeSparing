import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyAuth0 from 'fastify-auth0-verify';
import formBodyPlugin from 'fastify-formbody';
import { mainRouter } from './routers/mainRouter';
import { autRouter } from './routers/aut.router';
import { conectDB } from './lib/dbConnect';
import { provRouter } from './routers/prov.router';
import { munRouter } from './routers/mun.router';
import { stationsRouter } from './routers/station.router';
import { carRouter } from './routers/car.router';
import { AUTH0 } from './config';
import { usersRouter } from './routers/user.router';

export const mainApp: FastifyPluginAsync = async (app) => {
  conectDB();

  // ALL URL
  // app.register(fastifyCors, {
  //   // put your options here
  // });
  app.register(require('fastify-cors'), {
    origin: '*',
    allowedHeaders: ['Origin', 'X-Requested-With', 'Accept', 'Content-Type', 'Authorization'],
    methods: ['GET', 'PUT', 'PATCH', 'POST', 'DELETE'],
  });
  // app.register(fastifyCors, {
  //   origin: (origin, cb) => {
  //     if (/localhost/.test(origin)) {
  //       //  Request from localhost will pass
  //       cb(null, true);
  //       return;
  //     }
  //     // Generate an error on other origins, disabling access
  //     cb(null, false);
  //   },
  // });

  // Implementacion de la autenticacion con auth0

  await app.register(fastifyAuth0, {
    domain: AUTH0.DOMAIN,
    audience: AUTH0.AUDIENCE,
  });

  // la ruta de veryfy la hes puesto en main Router.
  app.get('/verify', {
    handler(request, reply) {
      reply.send(request.user);
    },
    preValidation: app.authenticate,
  });

  app.register(formBodyPlugin);

  app.register(mainRouter);
  app.register(autRouter, { prefix: '/api/aut' });
  app.register(provRouter, { prefix: '/api/prov' });
  app.register(munRouter, { prefix: '/api/mun' });
  app.register(carRouter, { prefix: '/api/car' });
  app.register(usersRouter, { prefix: '/api/user' });
  app.register(stationsRouter, { prefix: '/api/stations' });
};
