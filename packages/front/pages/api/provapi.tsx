import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { apiClient } from '../../lib/api/apiReq';

export default withApiAuthRequired(async function products(req, res) {
  // If your Access Token is expired and you have a Refresh Token
  // `getAccessToken` will fetch you a new one using the `refresh_token` grant

  const { accessToken } = await getAccessToken(req, res);
  console.log(accessToken);

  const resApi = await apiClient.get('/prov/porautonomia?aut=62140c5c9a73b22379fe53b3', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  //   const response = await fetch('https://api.example.com/products', {
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //     },
  //   });
  //   const products = await response.json();
  res.status(200).json(resApi.data);
});
