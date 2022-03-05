/* eslint-disable require-jsdoc */
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
  _id: '',
  email: '',
  userId: '',
  cp: '',
  municipio: '',
  carbData: {
    capacidad: 0,
    consumo: 0,
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
    case 'UPDATEMUN':
      return {
        ...state,
        municipio: action.municipio,
      };
    default:
      return state;
  }
  return state;
}

export const userStore = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));
