import React from 'react';
import { useSelector } from 'react-redux';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0';
import PropTypes from 'prop-types';

export const Alert = ({ message, color, icono }) => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  const { carbData } = useSelector((state) => state);
  console.log('VARIABLE COBNSUMO', carbData);
  console.log('PROP COLOR', color);
  const { capacidad } = carbData;
  return (
    <>
      {capacidad == 0 ? (
        <div
          className={`inline-flex items-center w-full px-6 py-5 mb-3 text-base text-${color}-700 bg-${color}-100 rounded-lg`}
          role='alert'>
          <svg
            aria-hidden='true'
            focusable='false'
            data-prefix='fas'
            data-icon={icono}
            className='w-4 h-4 mr-2 fill-current'
            role='img'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 576 512'>
            <path
              fill='currentColor'
              d='M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z'></path>
          </svg>
          {message}
          {'   '}
          <Link href='/userPanel'>
            <p className={`font-bold text-${color}-800 cursor-pointer`}>Area personal</p>
          </Link>
          .
        </div>
      ) : (
        <p />
      )}
    </>
  );
};

Alert.propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
  icono: PropTypes.string,
};
Alert.defaultProps = {
  message: '',
  color: '',
  icono: '',
};
