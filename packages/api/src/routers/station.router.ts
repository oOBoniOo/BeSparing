/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Gasolinera } from '../models/gasolinera.model';

type Myrequest = FastifyRequest<{
  Querystring: { long: number; lat: number; cp: string; nombre: string };
  Params: { id: string };
}>;

const getNearStations = async (request: Myrequest, reply: FastifyReply) => {
  let { long, lat } = request.query;
  long = parseFloat(long.toString());
  lat = parseFloat(lat.toString());

  const query = {
    location: {
      $near: {
        type: 'Point',
        coordinates: [lat, long],
        $maxDistance: 1000,
      },
    },
  };

  const stations = await Gasolinera.find(query).limit(50).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    long,
    lat,
    stations,
  });
};

const getStationsByCP = async (request: Myrequest, reply: FastifyReply) => {
  const { cp } = request.query;
  const min = parseInt(cp) - 5;
  const max = parseInt(cp) + 5;
  const query = { $and: [{ cp: { $gt: min } }, { cp: { $lt: max } }] };
  const stations = await Gasolinera.find(query).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    cp,
    stations,
  });
};

const getByAut = async (request: Myrequest, reply: FastifyReply) => {
  const { id } = request.params;
  const query = { idccaa: id };
  const stations = await Gasolinera.find(query).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    id,
    stations,
  });
};

const getByProv = async (request: Myrequest, reply: FastifyReply) => {
  const { id } = request.params;
  const query = { idprovincia: id };
  const stations = await Gasolinera.find(query).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    id,
    stations,
  });
};

const getByMunName = async (request: Myrequest, reply: FastifyReply) => {
  const { nombre } = request.query;
  const query = { municipio: nombre };
  const stations = await Gasolinera.find(query).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    nombre,
    stations,
  });
};

export const stationsRouter: FastifyPluginAsync = async (app) => {
  app.get('/', getNearStations);
  app.get('/cp', getStationsByCP);
  app.get('/autonomia/:id', getByAut);
  app.get('/provincia/:id', getByProv);
  app.get('/municipio', getByMunName);
};
