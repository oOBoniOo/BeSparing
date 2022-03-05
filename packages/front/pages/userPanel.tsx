import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { CascadeSelect } from '../components/carSelector/CascadeSelector';
import UserInfo from '../components/userinfo';
import { Alert } from '../components/utils/Alert';
import { SearchBox } from '../components/utils/SearchBox';

const UserPanel = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  if (user) {
    return (
      <>
        <UserInfo user={user} />
        <div className='grid max-w-lg grid-cols-2 px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
          <div>
            <h1>Car Info</h1>
            <CascadeSelect />
          </div>
          <div>
            <h1>Location Info</h1>
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
