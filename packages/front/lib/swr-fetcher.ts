import axios from 'axios';

const reeApi = axios.create({ baseURL: process.env.URL_ELECT });

const fetcher = async () => {
  let date = new Date();
  date.setHours(1, 0, 0);
  const hoy = date.toISOString().slice(0, -5);

  let tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(1, 0, 0);
  const man = tomorrow.toISOString().slice(0, -5);

  const resource = `https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=${hoy}&end_date=${man}&time_trunc=hour`;
  const res = await reeApi.get(resource);
  return res.data.included[0].attributes.values;
};

export default fetcher;
