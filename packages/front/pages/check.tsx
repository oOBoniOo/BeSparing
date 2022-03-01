import { UserProfile, useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { addUser } from '../lib/usersAPI';

const CheckUserInDB = () => {
  console.log('DENTRO DEL CHECK');
  const { user } = useUser();
  const peticion = async (user: UserProfile) => {
    await addUser(user);
  };
  peticion(user);
  return (
    <>
      <p>
        dfgjolghdifjgfdiolghfdolgolhjghfdolkhgoljkhgdfjoihgdljohgfojiñhgfopjiñghfojpñihgfojiñhfgojiñghfiopjñghfpjiñu
      </p>
    </>
  );
};

export default CheckUserInDB;
