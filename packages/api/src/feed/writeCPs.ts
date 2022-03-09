import { conectDB } from '../lib/dbConnect';
import { Municipio } from '../models/municipio.model';
import { CodPostal } from '../models/cp.model';

export const writeCods = async () => {
  const { close } = await conectDB();
  try {
    await CodPostal.collection.drop();
  } catch (error) {
    console.log('No hay nada en CodigosPostales.');
  }
  const jsonData = require('./data_sources/cps.json');

  await Promise.all(
    jsonData.map(async (cp: any) => {
      const info = {
        cp: parseInt(cp['codigo_postal']),
        municipio: cp['municipio_nombre'].normalize('NFD').replace(/[\u0300-\u036f]/g, ''),
      };
      await CodPostal.create(info).then();
    }),
  );

  await close();
};
writeCods();
