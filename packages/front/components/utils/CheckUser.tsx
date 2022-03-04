import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../../lib/redux/userAtcions';

export const CheckUser = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const dispatch = useDispatch();
  const { _id, carbData } = useSelector((state) => state);
  const checkUs = async (email) => {
    dispatch(getUserData(email));
  };
  useEffect(() => {
    if (user && !_id) {
      checkUs(user.email);
    }
  }, []);

  return <></>;
};
