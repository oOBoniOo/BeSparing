/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../models/userData.model';

type MyRequest = FastifyRequest<{
  Body: { userid: string };
  Querystring: { receta_id: string };
}>;

const addUser = async (request: MyRequest, reply: FastifyReply) => {
  console.log('ENTRAMOS A CREAR USER');
  console.log(request);
  const { userid } = request.body;
  User.create({ userId: userid })
    .then((data) => {
      reply.code(200).send(data);
      console.log(data);
      request.log.info(data);
    })
    .catch((error) => {
      reply.code(500).send({ message: error });
      console.log(error);
      request.log.info(error);
    });
  reply.redirect('/');
};

export const usersRouter: FastifyPluginAsync = async (app) => {
  app.post('/add', addUser);
  //   app.get('/porautonomia', getAutMunicipios);
  //   app.get('/porprovincia', getProvMunicipios);
};
