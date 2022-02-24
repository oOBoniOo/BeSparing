/* eslint-disable max-len */
import axios from 'axios';
import { URL_GASOFA } from '../config';
import { conectDB } from '../lib/dbConnect';
import { Gasolinera } from '../models/gasolinera.model';

type response = {
  Fecha: String;
  ListaEESSPrecio: [];
  Nota: String;
  ResultadoConsulta: String;
};
export const getGasolineras = async () => {
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


  console.log(allGas);
  await Promise.all(
      allGas.map(async (gas: any) => {
        const coordes = {type: 'Point', coordinates: [parseFloat(gas['Longitud (WGS84)'].replace(/,/g, '.')), parseFloat(gas['Latitud'].replace(/,/g, '.'))]};
        gas.coords = coordes;
        const gasoleo= gas['Precio Gasoleo A'].replace(/,/g, '.');
        const gasolina = gas['Precio Gasolina 95 E5'].replace(/,/g, '.');
        const gasolina98 = gas['Precio Gasolina 98 E5'].replace(/,/g, '.');
        const info = {
          cp: gas['C.P.'],
          direccion: gas['Dirección'],
          horario: gas['Horario'],
          localidad: gas['Localidad'],
          municipio: gas['Municipio'],
          location: coordes,
          gasoleo: parseFloat(gasoleo ? gasoleo:0),
          gasolina_95: parseFloat(gasolina ? gasolina:0),
          gasolina_98: parseFloat(gasolina98 ? gasolina98:0),
          ideess: gas['IDEESS'],
          idmunicipio: gas['IDMunicipio'],
          idprovincia: gas['IDProvincia'],
          idccaa: gas['IDCCAA'],
        };
        await Gasolinera.create(info).then();
      }),
  );

  await close();
};


