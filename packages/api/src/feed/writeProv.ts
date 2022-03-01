/* eslint-disable max-len */
import _ from 'lodash';
import { conectDB } from '../lib/dbConnect';
import { Autonomia } from '../models/autonomia.model';
import { Provincia } from '../models/provincia.model';

export const writeProv = async () => {
  const { close } = await conectDB();
  try {
    await Provincia.collection.drop();
  } catch (error) {
    console.log('There are no provinces to drop from db');
  }
  const jsonData = require('./data_sources/provs.json');
  const provincias = jsonData['PROVINCIAS'];

  // key
  // .trim()
  // .toLowerCase()
  // .normalize('NFD')
  // .replace(/[\u0300-\u036f]/g, '')
  // .replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '_')
  // .replace('__', '_')
  // const coordes = {type: 'Point', coordinates: [parseFloat(prov['Longitud (WGS84)'].replace(/,/g, '.')), parseFloat(prov['Latitud'].replace(/,/g, '.'))]};

  await Promise.all(
    provincias.map(async (prov: any) => {
      const aut: any = await Autonomia.findOne({ codigo: parseInt(prov['CODAUTON']) }).exec();
      const autId = aut._id;
      const info = {
        codigo: parseInt(prov['CODPROV']),
        nombre: _.capitalize(
          prov['NOMBREPROV']
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ' '),
        ),
        aut: autId,
      };
      await Provincia.create(info).then();
    }),
  );

  await close();
};
writeProv();
