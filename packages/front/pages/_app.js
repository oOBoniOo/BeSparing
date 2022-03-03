import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Provider } from 'react-redux';
import { userStore } from '../lib/redux/userStore';
import PropTypes from 'prop-types';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={userStore}>
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  </Provider>
);

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};
