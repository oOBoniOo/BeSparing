import React, { useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useDispatch, useSelector } from 'react-redux';
import { getUserData, updateEmailData } from '../../lib/redux/userAtcions';
import { iUserData } from '../../lib/redux/userStore';

export const CheckUser = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { _id } = useSelector((state: iUserData) => state);
  const dispatch = useDispatch();

  const checkUs = async (email) => {
    dispatch(getUserData(email));
  };
  useEffect(() => {
    if (user && !_id) {
      dispatch(updateEmailData(user.email));
      checkUs(user.email);
    }
  }, []);

  return <></>;
};
