/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
import React from 'react';
import Image from 'next/image';
import piggy from '../public/piggy.png';



export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center w-full h-screen'>
      <h1 className='text-3xl'>BeSparing</h1>
      <div className='relative w-64 h-64 p-2 m-2 overflow-hidden rounded-full ring-4 ring-rose-200 ring-offset-4'>
        <Image

          src={piggy}
          alt="BeSparing"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}
