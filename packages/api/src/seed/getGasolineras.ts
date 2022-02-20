/* eslint-disable max-len */
import axios from 'axios';
import { URL_GASOFA } from '../config';
import { conectDB } from '../lib/dbConnect';
import { iGasolinera, Gasolinera } from '../models/Gasolinera.model';

type response = {
  Fecha: String;
  ListaEESSPrecio: [];
  Nota: String;
  ResultadoConsulta: String;
};

(async () => {
  const { close } = await conectDB();
  try {
    await Gasolinera.collection.drop();
  } catch (error) {
    console.log('There are no ingredients to drop from db');
  }
  const apiGas = axios.create({ baseURL: URL_GASOFA });
  const res = await apiGas.get('/EstacionesTerrestres');
  const consulta: response = res.data;

  const allGas: [] = consulta.ListaEESSPrecio;
  allGas.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      const replacedKey = key
          .trim()
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '_')
          .replace('__', '_')
          .replace('longitud_wgs84_', 'longitud');

      if (key !== replacedKey) {
        obj[replacedKey] = obj[key];
        delete obj[key];
      }
    });
    // const coordes = {type: 'Point', coordinates: [parseFloat(obj['latitud'].replace(/,/g, '')), parseFloat(obj['latitud'].replace(/,/g, ''))]};
    // obj.coords = coordes;
  });
  // console.log(allGas);
  await Promise.all(
      allGas.map(async (gas) => {
        await Gasolinera.create(gas).then();
      }),
  );

  await close();
})();
