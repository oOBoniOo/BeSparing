/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Car } from '../models/car.model';

type Myrequest = FastifyRequest<{
  Querystring: { marca?:string, modelo?: string, generacion?: string, version?: string }
}>

const getCarByMarca = async (request: Myrequest, reply:FastifyReply) => {
  const { marca } = request.query;
  if (marca) {
    const veh = await Car.find({marca}).lean();
    reply.send({
      status: 'listado de vehiculos: OK',
      veh,
    });
  } else {
    const marcas = await Car.find({}).lean();
    const listaMarcas = marcas.map((m)=>m.marca);
    const newlist:string[] = [];
    listaMarcas.forEach((mar)=>{
      newlist.includes(mar) ? false : newlist.push(mar);
    });

    reply.send({
      status: 'listado de vehiculos: OK',
      newlist,
    });
  }
};

const getCarByModelo = async (request: Myrequest, reply:FastifyReply) => {
  const { marca } = request.query;
  if (marca) {
    const modelos = await Car.find({marca}).lean();
    const listaModelos = modelos.map((m)=>m.modelo);
    const data:string[] = [];
    listaModelos.forEach((mod)=>{
      data.includes(mod) ? false : data.push(mod);
    });
    reply.send({
      status: 'listado de vehiculos: OK',
      data,
    });
  };
};

const getCarByGeneracion = async (request: Myrequest, reply:FastifyReply) => {
  const { marca, modelo } = request.query;
  if (marca && modelo) {
    const generaciones = await Car.find({marca, modelo}).lean();
    const listaGeneraciones = generaciones.map((m)=>m.generacion);
    const data:string[] = [];
    listaGeneraciones.forEach((mod)=>{
      data.includes(mod) ? false : data.push(mod);
    });
    reply.send({
      status: 'listado de vehiculos: OK',
      data,
    });
  };
};


const getCarByVersion = async (request: Myrequest, reply:FastifyReply) => {
  const { marca, modelo, generacion } = request.query;
  if (marca && modelo && generacion) {
    console.log(marca,modelo,generacion);
    const versiones = await Car.find({marca, modelo, generacion}).lean();+
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', versiones);
    const listaVersiones = versiones.map((m)=>m.version);
    const data:string[] = [];
    listaVersiones.forEach((mod)=>{
      data.includes(mod) ? false : data.push(mod);
    });
    reply.send({
      status: 'listado de vehiculos: OK',
      data,
    });
  }else {
    reply.send({
      status: 'error',
      message: 'falta algun dato',
    });
  };
};

export const carRouter: FastifyPluginAsync = async (app) =>{
  app.get('/marcas', getCarByMarca);
  app.get('/modelos', getCarByModelo);
  app.get('/generaciones', getCarByGeneracion);
  app.get('/versiones', getCarByVersion);
  // app.get(':codigo', getOneAutonomia);
};
