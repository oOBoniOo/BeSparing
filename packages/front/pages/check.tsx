import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { addUser } from '../lib/usersAPI';

const CheckUserInDB = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log('USUARIO EN PAG CHECK: ', user);
  const peticion = async (user: UserProfile) => {
    console.log('EL USER DENTRO DE PETICION ES : ', user);
    await addUser(user);
    return true;
  };
  peticion(user);

  return (
    <>
      <p>HOLA</p>
    </>
  );
};

export default CheckUserInDB;
