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
      console.log('LA ACCION', action);
      return {
        ...state,
        ...action,
      };

    case 'DELETEEDATA':
      return {
        ...state,
        eData: {},
      };
    case 'DELETECARBDATA':
      return {
        ...state,
        carbData: {},
      };
    case 'DELETEALLDATA':
      return {
        ...state,
        state: {},
      };
    default:
      return state;
  }
  return state;
}

export const userStore = createStore(userReducer, composeWithDevTools(applyMiddleware(thunk)));
