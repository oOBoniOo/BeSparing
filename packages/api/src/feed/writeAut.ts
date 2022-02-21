/* eslint-disable max-len */
import { conectDB } from '../lib/dbConnect';
import { Autonomia } from '../models/Autonomia.model';


export const writeAut= async () => {
  const { close } = await conectDB();
  try {
    await Autonomia.collection.drop();
  } catch (error) {
    console.log('There are no autonomies to drop from db');
  }
  const jsonData= require('./data_sources/aut.json');
  const autonomias = jsonData['AUTONOMIAS'];

  // key
  // .trim()
  // .toLowerCase()
  // .normalize('NFD')
  // .replace(/[\u0300-\u036f]/g, '')
  // .replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '_')
  // .replace('__', '_')
  // const coordes = {type: 'Point', coordinates: [parseFloat(aut['Longitud (WGS84)'].replace(/,/g, '.')), parseFloat(aut['Latitud'].replace(/,/g, '.'))]};

  await Promise.all(
      autonomias.map(async (aut: any) => {
        const info = {
          codigo: parseInt(aut['CODAUTON']),
          nombre: aut['NOMBREAUTON']
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' '),
        };
        await Autonomia.create(info).then();
      }),
  );

  await close();
};
writeAut();
