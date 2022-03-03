import { useUser } from '@auth0/nextjs-auth0';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getUserData } from '../lib/redux/userAtcions';
import { Redirect } from 'react-router';

export const Check = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const dispatch = useDispatch();

  const checkUs = async (email) => {
    dispatch(getUserData(email));
  };
  useEffect(() => {
    checkUs(user.email);
  }, []);
  return <></>;
};
