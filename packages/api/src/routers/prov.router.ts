import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Provincia } from '../models/provincia.model';
import { hasUser } from './auth/hasUser';

type Myrequest = FastifyRequest<{
  Querystring: { codigo?: number; nombre?: string; id?: string; aut?: string };
}>;

// si tengo una request personalizada, user viene dentro?????????

const devolver = (reply: FastifyReply, estado: string, data: any) => {
  reply.send({
    status: estado,
    data,
  });
};

const getProvincias = async (request: Myrequest, reply: FastifyReply) => {
  const { codigo, nombre } = request.query;
  if (!nombre && !codigo) {
    const provincias = await Provincia.find({}).lean();
    devolver(reply, 'OK', provincias);
  } else {
    if (!codigo) {
      const provincias = await Provincia.findOne({ nombre }).exec();
      devolver(reply, 'OK', provincias);
    } else {
      const provincias = await Provincia.findOne({ codigo }).exec();
      devolver(reply, 'OK', provincias);
    }
  }
};

const getAutProvincia = async (request: Myrequest, reply: FastifyReply) => {
  const { aut } = request.query;
  const provincias = await Provincia.find({ aut });
  devolver(reply, 'OK', provincias);
};

// const getAutProvincia = async (request: Myrequest, reply: FastifyReply) => {
//   const user = await hasUser(request);
//   if (user) {
//     const { aut } = request.query;
//     const provincias = await Provincia.find({ aut });
//     devolver(reply, 'OK', provincias);
//   } else {
//     devolver(reply, 'acces dennied', []);
//   }
// };

export const provRouter: FastifyPluginAsync = async (app) => {
  app.get('/', getProvincias);
  app.get('/porautonomia', getAutProvincia);
};
