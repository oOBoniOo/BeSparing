import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import MenuItems from './menuItems';
import Link from 'next/link';

export const MenuLinksMobile = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <>
          {MenuItems.map((item, index) => {
            return (
              <Link href={item.url} key={item.url}>
                <li className='active'>
                  <a
                    href='index.html'
                    className='block px-2 py-4 text-sm font-semibold text-gray-500 bg-rose-300'>
                    {item.label}
                  </a>
                </li>
              </Link>
            );
          })}
        </>
      ) : (
        <>
          <a
            href='api/auth/login'
            className='px-2 py-4 font-semibold text-white transition duration-300 cursor-pointer hover:text-rose-200'>
            💰 Logeate y empieza a ahorrar! 💰
          </a>
        </>
      )}
    </>
  );
};
