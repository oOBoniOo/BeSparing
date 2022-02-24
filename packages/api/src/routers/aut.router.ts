import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Autonomia } from '../models/autonomia.model';

type Myrequest = FastifyRequest<{
  Querystring: { codigo?: number, nombre?:string },
  Params: { id:string }
}>


const getAutonomias = async (request:Myrequest, reply: FastifyReply) => {
  const {codigo, nombre} = request.query;
  if (!codigo && !nombre) {
    const autonomias = await Autonomia.find({}).lean();
    reply.send({
      status: 'listado de autonomias: OK',
      autonomias,
    });
    reply.code(200);
  } if (nombre) {
    const autonomia = await Autonomia.findOne({nombre}).exec();
    reply.send({
      status: `autonomia OK`,
      autonomia,
    });
  } else {
    const autonomia = await Autonomia.findOne({codigo}).exec();
    reply.send({
      status: `autonomia ${codigo}`,
      autonomia,
    });
  }
};

// ¿MEJOR ENDPOINTS SEPARADOS O JUNTOS?
// const getOneAutonomia = async (request:Myrequest, reply:FastifyReply) => {
//   console.log(request);
//   const {codigo} = request.query;
//   const autonomia = await Autonomia.findOne({codigo}).exec();
//   reply.send({
//     status: `autonomia ${codigo}`,
//     autonomia,
//   });
// };

export const autRouter: FastifyPluginAsync = async (app) =>{
  app.get('/', getAutonomias);
  // app.get(':codigo', getOneAutonomia);
};
