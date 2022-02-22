import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
// import { conectDB } from './lib/db';
import { mainRouter } from './routers/mainRouter';
import {autRouter} from './routers/aut.router';
import { conectDB } from './lib/dbConnect';
import { provRouter } from './routers/prov.router';
import { munRouter } from './routers/mun.router';
import { stationsRouter } from './routers/station.router';
import { carRouter } from './routers/car.router';

export const mainApp: FastifyPluginAsync = async (app) => {
  conectDB();

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
  app.register(autRouter, {prefix: '/aut'});
  app.register(provRouter, {prefix: '/prov'});
  app.register(munRouter, {prefix: '/mun'});
  app.register(carRouter, {prefix: '/car'});
  // app.register(userRouter, {prefix:'/user'});
  app.register(stationsRouter, {prefix: '/stations'});
};
