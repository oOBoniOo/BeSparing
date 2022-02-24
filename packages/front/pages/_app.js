import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
const MyApp = ({ Component, pageProps }) => (
  <>
    <Nav2/>
    <Component {...pageProps} />
  </>
);

export default MyApp;
