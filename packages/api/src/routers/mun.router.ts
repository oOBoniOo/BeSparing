import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Municipio } from '../models/municipio.model';

type Myrequest = FastifyRequest<{
  Querystring: { nombre?: string; prov?: string; aut?: string };
  Params: { _id: string };
}>;

const getmunicipios = async (request: Myrequest, reply: FastifyReply) => {
  const { nombre } = request.query;
  if (!nombre) {
    const municipios = await Municipio.find({}).lean();
    reply.send({
      status: 'listado de municipios: OK',
      municipios,
    });
  } else {
    const municipios = await Municipio.findOne({ nombre }).exec();
    reply.send({
      status: 'listado de municipios: OK',
      municipios,
    });
  }
};
const getAutMunicipios = async (request: Myrequest, reply: FastifyReply) => {
  const { aut } = request.query;
  const municipios = await Municipio.find({ aut });
  reply.send({
    status: 'listado de municipios por autonomia: OK',
    municipios,
  });
};
// ¿MEJOR ENDPOINTS SEPARADOS O JUNTOS?
const getProvMunicipios = async (request: Myrequest, reply: FastifyReply) => {
  const { prov } = request.query;
  const municipios = await Municipio.find({ prov });
  reply.send({
    status: 'listado de municipios por autonomia: OK',
    municipios,
  });
};

const getMatchMun = async (request: Myrequest, reply: FastifyReply) => {
  const { nombre } = request.query;
  if (nombre) {
    const municipios = await Municipio.find({ nombre: { $regex: '.*' + nombre + '.*' } }).lean();
    reply.code(200).send({
      status: 'listado de municipios: OK',
      municipios,
    });
  } else {
    reply.code(500).send({
      status: 'falta parametro nombre',
    });
  }
};

const getmunicipioById = async (request: Myrequest, reply: FastifyReply) => {
  const { _id } = request.params;
  if (_id) {
    const municipio = await Municipio.findById(_id).lean();
    reply.send({
      status: 'listado de municipios: OK',
      municipio,
    });
  } else {
    reply.code(500).send({
      status: 'falta _ID',
    });
  }
};
export const munRouter: FastifyPluginAsync = async (app) => {
  app.get('/', getmunicipios);
  app.get('/:_id', getmunicipioById);
  app.get('/match', getMatchMun);
  app.get('/porautonomia', getAutMunicipios);
  app.get('/porprovincia', getProvMunicipios);
};
