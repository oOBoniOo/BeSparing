import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Provincia } from '../models/provincia.model';

type Myrequest = FastifyRequest<{
  Querystring: { codigo?: number, nombre?:string, id?:string, aut?:string },
}>


const getProvincias = async (request:Myrequest, reply: FastifyReply) => {
  const { codigo, nombre } = request.query;
  if (!nombre && !codigo) {
    const provincias = await Provincia.find({}).lean();
    reply.send({
      status: 'listado de provincias: OK',
      provincias,
    });
  } else {
    if (!codigo) {
      const provincias = await Provincia.findOne({nombre}).exec();
      reply.send({
        status: 'listado de provincias: OK',
        provincias,
      });
    } else {
      const provincias = await Provincia.findOne({codigo}).exec();
      reply.send({
        status: 'listado de provincias: OK',
        provincias,
      });
    }
  };
};
const getAutProvincia = async (request:Myrequest, reply: FastifyReply) => {
  const {aut} =request.query;
  const provincias = await Provincia.find({aut});
  reply.send({
    status: 'listado de provincias por autonomia: OK',
    provincias,
  });
};
// ¿MEJOR ENDPOINTS SEPARADOS O JUNTOS?


export const provRouter: FastifyPluginAsync = async (app) =>{
  app.get('/', getProvincias);
  app.get('/porautonomia', getAutProvincia);
};
