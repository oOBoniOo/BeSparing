/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Car } from '../models/car.model';
import { unique } from '../utils/functions';

type Myrequest = FastifyRequest<{
  Querystring: { marca?: string; modelo?: string; generacion?: string; version?: string };
}>;

const getMarcas = async (request: Myrequest, reply: FastifyReply) => {
  const { marca } = request.query;
  if (marca) {
    const veh = await Car.find({ marca }).lean();
    reply.send({
      status: 'listado de vehiculos: OK',
      veh,
    });
  } else {
    const marcas = await Car.find({}).lean();
    const listaMarcas = marcas.map((m) => m.marca);
    const data = unique(listaMarcas);
    reply.send({
      status: 'listado de MARCAS: OK',
      data,
    });
  }
};

const getCarByModelo = async (request: Myrequest, reply: FastifyReply) => {
  const { marca } = request.query;
  if (marca) {
    const modelos = await Car.find({ marca }).lean();
    const listaModelos = modelos.map((m) => m.modelo);
    const data = unique(listaModelos);
    reply.send({
      status: 'listado de MODELOS: OK',
      data,
    });
  }
};

const getCarByGeneracion = async (request: Myrequest, reply: FastifyReply) => {
  const { marca, modelo } = request.query;
  if (marca && modelo) {
    const generaciones = await Car.find({ marca, modelo }).lean();
    const listaGeneraciones = generaciones.map((m) => m.generacion);
    const data = unique(listaGeneraciones);
    reply.send({
      status: 'listado de GENERACIONES: OK',
      data,
    });
  }
};

const getCarByVersion = async (request: Myrequest, reply: FastifyReply) => {
  const { marca, modelo, generacion } = request.query;
  if (marca && modelo && generacion) {
    console.log(marca, modelo, generacion);
    const versiones = await Car.find({ marca, modelo, generacion }).lean();
    const listaVersiones = versiones.map((m) => m.version);
    const data = unique(listaVersiones);
    reply.send({
      status: 'listado de VERSIONES: OK',
      data,
    });
  } else {
    reply.send({
      status: 'error',
      message: 'falta algun dato',
    });
  }
};

const getCarData = async (request: Myrequest, reply: FastifyReply) => {
  const { marca, modelo, generacion, version } = request.query;
  if (marca && modelo && generacion && version) {
    console.log(marca, modelo, generacion);
    const data = await Car.find({ marca, modelo, generacion, version }).lean();
    // const listaVersiones = versiones.map((m) => m.version);
    // const data = unique(listaVersiones);
    reply.send({
      status: 'DATOS VEHICULO: OK',
      data,
    });
  } else {
    reply.send({
      status: 'error',
      message: 'falta algun dato',
    });
  }
};

export const carRouter: FastifyPluginAsync = async (app) => {
  app.get('/marcas', getMarcas);
  app.get('/modelos', getCarByModelo);
  app.get('/generaciones', getCarByGeneracion);
  app.get('/versiones', getCarByVersion);
  app.get('/data', getCarData);
};
