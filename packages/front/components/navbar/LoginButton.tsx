/* eslint-disable max-len */
import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import Link from 'next/link';

export const LoginButton = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <>
          <span className='text-rose-100'>{user.email}</span>

          <button className='outline-none mobile-menu-button'>
            <Link href='/userPanel'>
              <svg
                className='w-8 h-8 text-gray-500 hover:text-rose-400'
                x-show='!showMenu'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                viewBox='0 0 24 24'
                stroke='currentColor'>
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </Link>
          </button>
          <img src={user.picture} alt='userpic' className='w-12 h-12 p-2 m-2 ' />
          <a
            href='/api/auth/logout'
            className='px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-rose-300 hover:text-gray-500'>
            LogOut
          </a>
        </>
      ) : (
        <a
          href='/api/auth/login'
          className='px-2 py-2 font-medium text-gray-500 transition duration-300 rounded hover:bg-rose-300 hover:text-gray-500'>
          Log In
        </a>
      )}
    </>
  );
};

export const LoginButtonMobile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <>
          <div className='block pb-4 text-sm text-gray-500 transition duration-300 hover:bg-rose-300'>
            <a
              href='/api/auth/logout'
              className='px-2 text-sm text-gray-500 transition duration-300 rounded hover:bg-rose-300 hover:text-gray-500'>
              LogOut
            </a>
            <span className='px-2 text-sm text-rose-100'>{user.email}</span>
            <img src={user.picture} alt='userpic' className='inline w-10 h-10 p-2 m-2 ' />
          </div>
        </>
      ) : (
        <a
          href='/api/auth/login'
          className='block px-2 py-4 text-sm text-gray-500 transition duration-300 rounded text-smpx-2 hover:bg-rose-300 hover:text-gray-500'>
          Log In
        </a>
      )}
    </>
  );
};
