import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { CascadeSelect } from '../components/carSelector/CascadeSelector';
import UserInfo from '../components/Userinfo';
import { Alert } from '../components/utils/Alert';
import { SearchBox } from '../components/utils/SearchBox';
import { IoCarSportSharp } from 'react-icons/io5';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
const UserPanel = () => {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        <UserInfo user={user} />
        <div className='grid max-w-lg grid-cols-2 px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
          <div>
            <div className='p-2 m-auto'>
              Encuentra la informacionde tu vehiculo
              <IoCarSportSharp size={32} className='m-auto' />
            </div>

            <CascadeSelect />
          </div>
          <div>
            <div className='p-2 m-auto'>
              Donde te encuentras?
              <MdOutlineAddLocationAlt size={32} className='m-auto' />
            </div>
            <SearchBox />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <Alert
        message='Logeate para acceder a la informacion del '
        color='red'
        icono='exclamation-triangle'
      />
    );
  }
};
export default UserPanel;
