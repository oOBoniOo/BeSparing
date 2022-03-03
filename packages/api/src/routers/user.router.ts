/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { User, iUser } from '../models/userData.model';

type MyRequest = FastifyRequest<{
  Body: iUser;
  Params: { id: string };
  Querystring: { email: string; userId: string };
}>;

const addUser = async (request: MyRequest, reply: FastifyReply) => {
  const { email, userId } = request.body;
  console.log('***********************AQUI ENTRO', email);
  try {
    if (!email) throw new Error('email not found');
    if (!userId) throw new Error('userid not found');
    await User.create({ email, userId })
      .then((data) => {
        return reply.code(200).send(data);
      })
      .catch((error) => {
        return reply.code(500).send({ message: error });
      });
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

const findUser = async (request: MyRequest, reply: FastifyReply) => {
  const { email, userId } = request.query;
  try {
    if (!email && !userId) throw new Error('no data');
    if (email) {
      const res = await User.findOne({ email }).lean();
      return reply.code(200).send({ message: 'OK', res });
    }
    if (userId) {
      const res = await User.findOne({ userId }).lean();
      return reply.code(200).send({ message: 'OK', res });
    }
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

const updateUser = async (request: MyRequest, reply: FastifyReply) => {
  const { id } = request.params;
  try {
    if (!id) throw new Error('no data');
    const res = await User.findByIdAndUpdate({ id }, request.body).lean();
    return reply.code(200).send({ message: 'OK', res });
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

export const usersRouter: FastifyPluginAsync = async (app) => {
  app.post('/add', addUser);
  app.get('/find', findUser);
  app.patch('/update/id', updateUser);
};
