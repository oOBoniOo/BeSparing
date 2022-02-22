/* eslint-disable max-len */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Gasolinera } from '../models/gasolinera.model';

type Myrequest = FastifyRequest<{
  Querystring: { long:number, lat:number },
}>


const getNearStations = async (request:Myrequest, reply: FastifyReply) => {
  let { long, lat } = request.query;
  long = parseFloat(long.toString());
  lat = parseFloat(lat.toString());

  const query = {
    'location': {
      '$near': {
        type: 'Point',
        coordinates: [lat, long],
        $maxDistance: 1000,
      },
    },
  };

  const stations = await Gasolinera.find(query).limit(10).lean();
  reply.send({
    status: 'listado de gasolineras: OK',
    long,
    lat,
    stations,
  });
};


export const stationsRouter: FastifyPluginAsync = async (app) =>{
  app.get('/', getNearStations);
//   app.get('/porautonomia', getAutMunicipios);
//   app.get('/porprovincia', getProvMunicipios);
};
