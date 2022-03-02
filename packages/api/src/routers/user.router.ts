/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { User } from '../models/userData.model';

type MyRequest = FastifyRequest<{
  Body: { userid: string };
  Params: { userid: string };
  Querystring: { userid: string };
}>;

const addUser = async (request: MyRequest, reply: FastifyReply) => {
  console.log('ENTRAMOS A CREAR USER');
  console.log('REQUEST***************', request.body);
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
  reply.send(userid);
};

const findUser = async (request: MyRequest, reply: FastifyReply) => {
  const { userid } = request.query;
  const res = await User.find({ userid });
  reply.send('OK');
};

export const usersRouter: FastifyPluginAsync = async (app) => {
  app.post('/add', addUser);
  app.get('/find', findUser);
  //   app.get('/porprovincia', getProvMunicipios);
};
