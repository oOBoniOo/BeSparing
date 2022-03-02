import React from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { CascadeSelect } from '../components/carSelector/CascadeSelector';

const UserInfo = () => {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  return (
    <>
      <div className='container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center'>
        <h1>USERINFOOOOOOOO</h1>
        <CascadeSelect />
        <div>
          <img src={user.picture} alt={user.name} />
          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      </div>
    </>
  );
};
export default UserInfo;
