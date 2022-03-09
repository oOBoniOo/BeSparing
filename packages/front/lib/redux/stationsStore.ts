/* eslint-disable require-jsdoc */
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  stations: [],
};

function stationsReducer(state = initialState, action) {
  return state;
}

export const stationsStore = createStore(stationsReducer, composeWithDevTools());
