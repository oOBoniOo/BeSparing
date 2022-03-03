import React, { useEffect } from 'react';
import Image from 'next/image';
import piggy from '../public/piggy.png';
import { useUser } from '@auth0/nextjs-auth0';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getUserData } from '../lib/redux/userAtcions';

const Alert = ({ message }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { carbData } = useSelector((state) => state);
  console.log('VARIABLE COBNSUMO', carbData);
  const { capacidad } = carbData;
  return (
    <>
      {capacidad < 0.1 ? (
        <div
          className='inline-flex items-center w-full px-6 py-5 mb-3 text-base text-yellow-700 bg-yellow-100 rounded-lg'
          role='alert'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon='exclamation-triangle'
            className='w-4 h-4 mr-2 fill-current'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'>
            <path
              fill='currentColor'
              d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path>
          </svg>
          {message}
          <a href='/userinfo' className='font-bold text-yellow-800'>
            Area personal
          </a>
          .
        </div>
      ) : (
        <p />
      )}
    </>
  );
};

const CheckUser = () => {
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

const ContentButton = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      {user ? (
        <>
          <a
            href='/gasolina'
            type='button'
            className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white border border-transparent rounded-full bg-rose-300 md:w-auto hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
            Ahorra en carburantes
          </a>
          <span className='absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-gray-900 rounded-full'>
            en 2 simples pasos
          </span>
        </>
      ) : (
        <>
          <a
            href='/api/auth/login'
            type='button'
            className='inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white border border-transparent rounded-full bg-rose-300 md:w-auto hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600'>
            Ahorra en carburantes
          </a>
          <span className='absolute top-0 right-0 px-2 py-1 -mt-3 -mr-6 text-xs font-medium leading-tight text-white bg-gray-900 rounded-full'>
            logeate y descubre como
          </span>
        </>
      )}
    </>
  );
};

const Landing = () => (
  <div className='container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
    <Alert message='No hemos detectado algunos datos necesarios, por favor introducelos en tu area personal' />
    <h1 className='text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl'>
      <span className='inline md:block'>Empieza a ahorrar</span>{' '}
      <span className='relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-rose-200 to-rose-400 md:inline-block'>
        Usa BeSparing
      </span>
    </h1>
    <Image src={piggy} alt='BeSparing' width={200} height={200} />
    <div className='mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg'>
      Comprueba cuanto puedes ahorrar en gastos cotidianos.
    </div>
    <div className='flex flex-col items-center mt-12 text-center'>
      <span className='relative inline-flex w-full md:w-auto'>
        <ContentButton></ContentButton>
        <CheckUser />
      </span>
      <a href='#' className='mt-3 text-sm text-indigo-500'></a>
    </div>
  </div>
);
export default Landing;
