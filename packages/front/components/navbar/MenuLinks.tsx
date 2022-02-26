import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import MenuItems from './menuItems';
import Link from 'next/link';

export const MenuLinks = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  console.log(user);
  return (
    <>
      {user ? (
        <>
          {MenuItems.map((item, index) => {
            console.log(item.url);
            return (
              <>
                <Link href={item.url} key={item.url}>
                  <div className="px-2 py-4 font-semibold text-gray-500 transition duration-300 cursor-pointer hover:text-rose-200">
                    <div className="w-10 pb-2 mx-auto hover:text-primary-500">
                      {/* {item.icon} */}
                    </div>
                    <p className="mx-3 click text-secondary-300">{item.label}</p>
                  </div>
                </Link>
              </>
            );
          })}
        </>
      ) : (
        <>
          <a
            href="api/auth/login"
            className="px-2 py-4 font-semibold text-white transition duration-300 cursor-pointer hover:text-rose-200"
          >
            💰 Logeate y empieza a ahorrar! 💰
          </a>
        </>
      )}
    </>
  );
};
