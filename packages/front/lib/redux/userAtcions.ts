import { UserProfile } from '@auth0/nextjs-auth0';
import { addUserDB, updateUserOnDB, checkUserDB } from '../api/usersRequests';

// ACTION CREATORS
export const updateData = (userData) => {
  console.log('mi data', userData);
  return {
    type: 'UPDATE',
    ...userData,
  };
};
export const deleteCarbData = () => {
  return {
    type: 'DELETECARBDATA',
  };
};

export const deleteeData = () => {
  return {
    type: 'DELETEEDATA',
  };
};
export const deleteUserData = () => {
  return {
    type: 'DELETEALLDATA',
  };
};

export const saveUserOnServer = (user: UserProfile) => {
  return async (dispatch) => {
    return await addUserDB(user);
  };
};

export const getUserData = (email) => async (dispatch) => {
  const data = await checkUserDB(email);
  dispatch(deleteUserData());
  dispatch(updateData(data));
};
