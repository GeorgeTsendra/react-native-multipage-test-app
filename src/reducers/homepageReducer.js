import {loginedSuccess, logout} from '../constants/redux';

const initialState = {
    userIsLogined: false,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case loginedSuccess: {
         return { ...state, userIsLogined: true };
    }
        case logout: {
        return { ...state, userIsLogined: false };
    }
      
        default:
         return state;
    }
  }
  