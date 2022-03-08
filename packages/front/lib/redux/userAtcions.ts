import { UserProfile } from '@auth0/nextjs-auth0';
import { addUserDB, checkUserDB } from '../api/usersRequests';
import { iCarbData } from './userStore';

// ACTION CREATORS
export const updateData = (userData) => {
  return {
    type: 'UPDATE',
    ...userData,
  };
};
export const updateCarbData = (carbData: iCarbData) => {
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

export const updateMunData = (municipio) => {
  return {
    type: 'UPDATE_MUN',
    municipio,
  };
};

export const updateEmailData = (email) => {
  return {
    type: 'UPDATE_EMAIL',
    email,
  };
};

export const saveUserOnServer = (user: UserProfile) => {
  return async (dispatch) => {
    return await addUserDB(user);
  };
};

export const getUserData = (email) => async (dispatch) => {
  const data = await checkUserDB(email);
  if (data == null) {
    const info = {
      email: email,
      userId: '',
      cp: 0,
      municipio: '',
      carbData: {
        capacidad: 0,
        consumo: 0,
        modelo: '',
      },
      eData: {
        coste: [],
      },
    };
    const res = addUserDB(info);
  } else {
    dispatch(deleteUserData());
    dispatch(updateData(data));
  }
};

export const updateUserData = (userData) => async (dispatch) => {
  dispatch(deleteUserData());
  dispatch(updateData(userData));
};
