import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';

const CheckUserInDB = () => {
  const { user } = useUser();
  return (
    <>
      <div className='container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
        <h1>GASOFAAAAAA</h1>
      </div>
    </>
  );
};

export default Gasolina;
