import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Provider } from 'react-redux';
import { stationsStore } from '../lib/redux/stationsStore';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={stationsStore}>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </Provider>
);

export default MyApp;
