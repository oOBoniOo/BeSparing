import React from 'react';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Nav2 from '../components/Nav2';
import Footer from '../components/Footer';
const MyApp = ({ Component, pageProps }) => (
  <>
    <Nav2 />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default MyApp;
