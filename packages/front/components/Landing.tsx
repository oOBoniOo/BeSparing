import React from 'react';
import Image from 'next/image';
import piggy from '../public/piggy.png';
import { useUser } from '@auth0/nextjs-auth0';
import { Alert } from './utils/Alert';
import Link from 'next/link';

const ContentButton = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <>
          <div className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white border border-transparent rounded-full bg-rose-300 md:w-auto hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
            <Link href="/gasolina">Ahorra en carburantes</Link>
            <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-gray-900 rounded-full">
              en 2 simples pasos
            </span>
          </div>
        </>
      ) : (
        <>
          <a
            href="/api/auth/login"
            type="button"
            className="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white border border-transparent rounded-full bg-rose-300 md:w-auto hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Ahorra en carburantes
          </a>
          <span className="absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-gray-900 rounded-full">
            logeate y descubre como
          </span>
        </>
      )}
    </>
  );
};

const Landing = () => (
  <div className="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
    <Alert
      message="No hemos detectado algunos datos necesarios, por favor introducelos en tu  :"
      color="yellow"
      icono="exclamation-triangle"
    />
    <h1 className="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl">
      <span className="inline md:block">Empieza a ahorrar</span>{' '}
      <span className="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-rose-200 to-rose-400 md:inline-block">
        Usa BeSparing
      </span>
    </h1>
    <Image src={piggy} alt="BeSparing" width={200} height={200} />
    <div className="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg">
      Comprueba cuanto puedes ahorrar en gastos cotidianos.
    </div>
    <div className="flex flex-col items-center mt-12 text-center">
      <span className="relative inline-flex w-full md:w-auto">
        <ContentButton></ContentButton>
        {/* <CheckUser /> */}
      </span>
      <a href="#" className="mt-3 text-sm text-indigo-500"></a>
    </div>
  </div>
);
export default Landing;
