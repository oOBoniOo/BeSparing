import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const UserInfo = ({ user }) => {
  return (
    <div className='container px-20 mx-auto'>
      <div className='flex items-center justify-start overflow-hidden bg-white border border-gray-300 rounded-xl cursor: auto'>
        <div className='relative flex-shrink-0 w-32 h-32'>
          <div className='relative top-0 left-0 flex items-center justify-center w-full h-full'>
            <Image
              alt='Placeholder Photo'
              className='absolute top-0 left-0 object-cover object-center w-full h-full transition duration-50'
              loading='lazy'
              layout='fill'
              src={`/api/imagefetcher?url=${encodeURIComponent(`${user.picture}`)}`}
            />
          </div>
        </div>
        <div className='px-2'>
          <p className='font-bold text-m line-clamp-1'>{user.name}</p>
          <p className='mt-1 text-sm text-gray-500 line-clamp-2'>Registrado en BeSparing</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;

UserInfo.propTypes = {
  user: PropTypes.object,
};
UserInfo.defaultProps = {
  user: {},
};
