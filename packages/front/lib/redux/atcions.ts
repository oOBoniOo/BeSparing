import { createStore } from 'redux';
import { getNearStations } from '../api/stationsRequests';

const initState = {
  stations: [],
};

function routReducer(state = initState, action) {
  switch (action.type) {
    case 'ADDITEM':
      return 
        stations: [...state.stations, action.station],
      };
    case 'DELETEALL':
      return {
        ...state,
        ingredients: [],
      };
    default:
      return state;
  }
}
