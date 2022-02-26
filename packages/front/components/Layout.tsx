import React from 'react';
import Footer from './Footer';
import Navbar from './navbar/Navbar';

const Layout: React.FC = ({ children }) => (
  <div className="font-sans">
    <div className="container mx-auto">
      <Navbar />
    </div>
    {children}
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Layout;
