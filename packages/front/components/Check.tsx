import { useUser } from '@auth0/nextjs-auth0';
import React from 'react';
import { useDispatch } from 'react-redux';

import { getUserData } from '../lib/redux/userAtcions';

export const Check = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const dispatch = useDispatch();

  const checkUs = async (email) => {
    dispatch(getUserData(email));
  };
  return (
    <button type='button' onClick={() => checkUs(user.email)}>
      HOLA
    </button>
  );
};
