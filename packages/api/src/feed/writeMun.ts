/* eslint-disable max-len */
import { conectDB } from '../lib/dbConnect';
import { Provincia } from '../models/Provincia.model';
import { Municipio } from '../models/Municipio.model';


export const writeMun= async () => {
  const { close } = await conectDB();
  try {
    await Municipio.collection.drop();
  } catch (error) {
    console.log('No hay nada en municipios.');
  }
  const jsonData= require('./data_sources/muns.json');
  const municipios = jsonData['MUNICIPIOS'];
  // key
  // .trim()
  // .toLowerCase()
  // .normalize('NFD')
  // .replace(/[\u0300-\u036f]/g, '')
  // .replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '_')
  // .replace('__', '_')
  // const coordes = {type: 'Point', coordinates: [parseFloat(prov['Longitud (WGS84)'].replace(/,/g, '.')), parseFloat(prov['Latitud'].replace(/,/g, '.'))]};

  await Promise.all(
      municipios.map(async (mun: any) => {
        console.log('municipio******** ', mun['NOMBRE_ACTUAL']);
        const prov:any = await Provincia.findOne({codigo: parseInt(mun['COD_PROV'])}).lean().exec();
        const provId = prov._id;
        // const autId = prov.aut;
        const info = {
          nombre: mun['NOMBRE_ACTUAL']
              .normalize('NFD')
              .replace(/[\u0300-\u036f]/g, '')
              .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' '),
          coords: {
            type: 'Point',
            coordinates: [mun['LONGITUD_ETRS89'], mun['LATITUD_ETRS89']],
          },
          prov: provId,
          // aut: autId,
        };
        await Municipio.create(info).then();
      }),
  );

  await close();
};
writeMun();
