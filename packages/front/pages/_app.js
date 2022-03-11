import React from 'react';
import '../styles/globals.css';
import Layout from '../components/Layout';
import { UserProvider } from '@auth0/nextjs-auth0';
import { Provider } from 'react-redux';
import { userStore } from '../lib/redux/userStore';
import PropTypes from 'prop-types';
import { CheckUser } from '../components/utils/CheckUser';
import { Helmet } from 'react-helmet';

const MyApp = ({ Component, pageProps }) => (
  <Provider store={userStore}>
    <UserProvider>
      <div className='bg-rose-100'>
        <Layout>
          <Helmet
            htmlAttributes={{ lang: 'es' }}
            title='Ahorra con BeSparing'
            meta={[
              {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
              },
              { property: 'og:title', content: 'Ahorra en lo basico' },
            ]}>
            <link rel='icon' src='../static/favicon.ico' sizes='16x16' />
          </Helmet>
          <CheckUser />
          <Component {...pageProps} />
        </Layout>
      </div>
    </UserProvider>
  </Provider>
);

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.any,
};
