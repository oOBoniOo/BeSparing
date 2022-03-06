/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Landing from '../components/Landing';
import { CheckUser } from '../components/utils/CheckUser';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <CheckUser />
      <Landing />
    </div>
  );
}
