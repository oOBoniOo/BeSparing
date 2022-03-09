import axios from 'axios';

const reeApi = axios.create({ baseURL: process.env.URL_ELECT });

const fetcher = async () => {
  const resource =
    'https://apidatos.ree.es/es/datos/mercados/precios-mercados-tiempo-real?start_date=2022-03-09T00:00&end_date=2022-03-10T23:59&time_trunc=hour';
  const res = await reeApi.get(resource);
  return res.data.included[0].attributes.values;
};

export default fetcher;
