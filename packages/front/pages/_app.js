import React from 'react';
import '../styles/globals.css';
// import Navbar from '../components/navbar/Navbar';
// import Footer from '../components/Footer';
import Layout from '../components/Layout';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
