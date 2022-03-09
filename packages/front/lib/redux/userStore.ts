/* eslint-disable require-jsdoc */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export interface iUserData {
  _id: string;
  email: string;
  userId: string;
  cp: number;
  municipio: string;
  carbData: {
    capacidad: number;
    consumo: number;
    tipo: string;
    modelo: '';
  };
  eData?: {
    coste: number[];
  };
}

export interface iCarbData {
  capacidad: number;
  consumo: number;
  tipo: string;
  modelo: string;
}

const initialState: iUserData = {
  _id: '',
  email: '',
  userId: '',
  cp: 0,
  municipio: '',
  carbData: {
    capacidad: 0,
    consumo: 0,
    tipo: 'gasolina',
    modelo: '',
  },
  eData: {
    coste: [],
  },
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE':
      return {
        ...state,
        ...action,
      };

    case 'DELETE_EDATA':
      return {
        ...state,
        eData: {},
      };
    case 'UPDATE_CARBDATA':
      return {
        ...state,
        carbData: action.carbData,
      };
    case 'DELETE_CARBDATA':
      return {
        ...state,
        carbData: {},
      };
    case 'DELETE_ALLDATA':
      return {
        ...state,
        state: {},
      };
    case 'UPDATE_MUN':
      return {
        ...state,
        municipio: action.municipio,
      };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
  return state;
}

export const userStore = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));
