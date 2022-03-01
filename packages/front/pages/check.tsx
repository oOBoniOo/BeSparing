import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import React, { useEffect } from 'react';
import { addUser } from '../lib/usersAPI';

const CheckUserInDB = () => {
  console.log('DENTRO DEL CHECK');
  const { user } = useUser();
  console.log('USUARIO FUERA: ', user);
  const peticion = async (user: UserProfile) => {
    console.log('EL USER ES : ', user);
    await addUser(user);
    return true;
  };
  useEffect(() => {
    peticion(user);
  }, [user]);

  return (
    <>
      <p>HOLA</p>
    </>
  );
};

export default CheckUserInDB;
