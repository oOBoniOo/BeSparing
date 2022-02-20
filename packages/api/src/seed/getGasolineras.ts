import axios from 'axios';
import { URL_GASOFA } from '../config';
import { conectDB } from '../lib/dbConnect';
import { iGasolinera, Gasolinera } from '../models/Gasolinera.model';

type response = {
  Fecha: String,
  ListaEESSPrecio: [],
  Nota: String,
  ResultadoConsulta: String
}

(async () => {
  const { close } = await conectDB();
  try {
    await Gasolinera.collection.drop();
  } catch (error) {
    console.log('There are no ingredients to drop from db');
  }
  const apiGas = axios.create({baseURL: URL_GASOFA});
  const res = await apiGas.get('/EstacionesTerrestres');
  const consulta:response = res.data
  const allGas = consulta.ListaEESSPrecio;
  await Promise.all(
      allGas.map(async (gas) => {
        await Gasolinera.create(gas).then();
      }),
  );

  await close();
})();
