/* eslint-disable max-len */
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';

export const LoginButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <div className="items-center hidden space-x-3 md:flex ">
      {user ? (
        <>
          <a
            href="/api/auth/logout"
            className="px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-rose-300 hover:text-gray-500"
          >
            LogOut
          </a>
          <span className="text-rose-100">{user.email}</span>
          <img src={user.picture} alt="userpic" className="w-12 h-12 p-2 m-2 " />
        </>
      ) : (
        <a
          href="/api/auth/login"
          className="px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-rose-300 hover:text-gray-500"
        >
          Log In
        </a>
      )}
    </div>
  );
};
