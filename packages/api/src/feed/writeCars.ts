/* eslint-disable max-len */
import { conectDB } from '../lib/dbConnect';
import { Car } from '../models/car.model';

export const writeCars = async () => {
  const { close } = await conectDB();
  try {
    await Car.collection.drop();
  } catch (error) {
    console.log('There are no cars to drop from db');
  }
  const jsonData = require('./data_sources/autodata.json');
  const marcas = Object.keys(jsonData);
  const coches: any[] = [];
  marcas.forEach((marca) => {
    const modelos = Object.keys(jsonData[marca]);
    modelos.forEach((modelo) => {
      const generaciones = Object.keys(jsonData[marca][modelo]);
      generaciones.forEach((generacion) => {
        const versiones = Object.keys(jsonData[marca][modelo][generacion]);
        versiones.forEach((version) => {
          const dataV = jsonData[marca][modelo][generacion][version];
          let capacidad = 0;
          if (Object.keys(dataV).includes('_volume')) {
            if (Object.keys(dataV['_volume']).includes('capacidad_deposito')) {
              const myRe = /([0-9]{1,2})+/g;
              capacidad = parseInt(dataV['_volume']['capacidad_deposito'].match(myRe)[0]);
            }
          }

          let consumoUrb = 0;
          let consumoExt = 0;
          let consumo = 0;
          let tipo = '';
          const myRe2 = /(\d{1,2})+.?\d/g;
          const performanceKeys = Object.keys(dataV['_performance']);
          performanceKeys.forEach((key) => {
            switch (key) {
              case 'consumo_de_combustible_combinado':
                consumo = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'consumo_de_combustible_urbano':
                consumoUrb = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'consumo_de_combustible_extraurbano':
                consumoExt = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'consumo_de_combustible_combinado_nedc_':
                consumo = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'consumo_de_combustible_urbano_nedc_':
                consumoUrb = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'consumo_de_combustible_extraurbano_nedc_':
                consumoExt = parseFloat(dataV['_performance'][key].match(myRe2)[0]);
                break;
              case 'combustible':
                if (dataV['_performance'][key].toLowerCase().includes('gasolina')) {
                  tipo = 'gasolina';
                } else {
                  if (dataV['_performance'][key].toLowerCase().includes('diesel')) {
                    tipo = 'diesel';
                  } else {
                    if (dataV['_performance'][key].toLowerCase().includes('mezcla')) {
                      tipo = 'gasolina';
                    } else {
                      if (dataV['_performance'][key].toLowerCase().includes('gpl')) {
                        tipo = 'gasolina';
                      } else {
                        if (dataV['_performance'][key].toLowerCase().includes('hidr')) {
                          tipo = 'gasolina';
                        } else {
                          tipo = dataV['_performance'][key].toLowerCase();
                        }
                      }
                    }
                  }
                }
                // console.log(tipo);
                break;
            }
          });
          if (consumo == 0) {
            if (consumoUrb != 0 && consumoExt != 0) {
              consumo = (consumoUrb + consumoExt) / 2;
            } else if (consumoUrb != 0) {
              consumo = consumoUrb;
            } else {
              consumo = consumoExt;
            }
          }

          const info = {
            marca: marca.trim(),
            modelo: modelo.trim(),
            generacion: generacion.trim(),
            version: version.trim(),
            consumo: consumo,
            capacidad: capacidad,
            tipo: tipo.trim(),
            estado: 'activo',
          };
          coches.push(info);
          // await Car.create(info).then();
          // console.log(coches);
        });
      });
    });
  });

  // key
  // .trim()
  // .toLowerCase()
  // .normalize('NFD')
  // .replace(/[\u0300-\u036f]/g, '')
  // .replace(/[\s&\/\\#,+()$~%.'":*?<>{}]/g, '_')
  // .replace('__', '_')
  // const coordes = {type: 'Point', coordinates: [parseFloat(prov['Longitud (WGS84)'].replace(/,/g, '.')), parseFloat(prov['Latitud'].replace(/,/g, '.'))]};
  await Promise.all(
    coches.map(async (coche: any) => {
      console.log(coche.tipo);
      await Car.create(coche).then();
    }),
  );
  await close();
};
writeCars();
