/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { User, iUser } from '../models/userData.model';

type MyRequest = FastifyRequest<{
  Body: iUser;
  Params: { _id: string };
  Querystring: { email: string; userId: string; _id: string };
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
  const uData: iUser = request.body;
  // HACER COPIA DE oBJETO DIFERENTE REFERENCIA
  // JSON.parse(JSON.stringify(uData))

  const { _id } = uData;
  delete uData._id;
  try {
    if (!_id) throw new Error('no data');
    // const pepe = await User.findById(_id);
    // console.log('ESTE ES PEEPE', pepe);
    const res = await User.findByIdAndUpdate(_id, uData);
    // console.log('RES', res);
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
