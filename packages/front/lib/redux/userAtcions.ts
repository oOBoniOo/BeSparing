import { UserProfile } from '@auth0/nextjs-auth0';
import { addUserDB, updateUserOnDB, checkUserDB, checkUserById } from '../api/usersRequests';

// ACTION CREATORS
export const updateData = (userData) => {
  return {
    type: 'UPDATE',
    ...userData,
  };
};
export const updateCarbData = (carbData) => {
  console.log('ACTION UPDATECARBDATA', carbData);
  return {
    type: 'UPDATE_CARBDATA',
    carbData,
  };
};

export const deleteCarbData = () => {
  return {
    type: 'DELETE_CARBDATA',
  };
};

export const deleteeData = () => {
  return {
    type: 'DELETE_EDATA',
  };
};
export const deleteUserData = () => {
  return {
    type: 'DELETE_ALLDATA',
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

export const updateUserData = (userData) => async (dispatch) => {
  dispatch(deleteUserData());
  dispatch(updateData(userData));
};
