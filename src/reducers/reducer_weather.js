import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // not mutating state, just adding a new instance of state
      // return state.concat([action.payload.data]);
      return [ action.payload.data, ...state ]; // es6 version [ city, city, city ]
      // new record is entered at the top of the array
  }
  return state;
}
