/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { User, UserDocument } from '../models/userData.model';

type MyRequest = FastifyRequest<{
  Body: UserDocument;
  Params: { _id: string };
  Querystring: { email: string; userId: string; _id: string };
}>;

const addUser = async (request: MyRequest, reply: FastifyReply) => {
  const { email } = request.body;

  try {
    // if (!email) throw new Error('email not found');
    // if (!userId) throw new Error('userid not found');
    const res = await User.create({ email: email });
    return reply.code(200).send(res);
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

const findUser = async (request: MyRequest, reply: FastifyReply) => {
  const { email, _id } = request.query;
  try {
    if (!email && !_id) throw new Error('no data');
    if (email) {
      const res = await User.findOne({ email }).lean();
      return reply.code(200).send({ message: 'OK', res });
    }
    if (_id) {
      const res = await User.findOne({ _id }).lean();
      return reply.code(200).send({ message: 'OK', res });
    }
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

const updateUser = async (request: MyRequest, reply: FastifyReply) => {
  const uData: UserDocument = request.body;
  // HACER COPIA DE oBJETO DIFERENTE REFERENCIA
  // JSON.parse(JSON.stringify(uData))

  const { _id } = uData;
  delete uData._id;
  try {
    if (!_id) throw new Error('no data');
    const res = await User.findByIdAndUpdate(_id, uData);
    return reply.code(200).send({ message: 'OK', res });
  } catch (error) {
    return reply.code(500).send({ error });
  }
};

export const usersRouter: FastifyPluginAsync = async (app) => {
  app.post('/add', addUser);
  app.get('/find', findUser);
  app.post('/update', updateUser);
};
