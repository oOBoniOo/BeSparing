import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }) => (
  <UserProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </UserProvider>
);

export default MyApp;
