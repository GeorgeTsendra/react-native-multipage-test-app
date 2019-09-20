import {AUTHPASSWORD, AUTHUSERNAME, Authentication} from '../constants/redux';

const initialState = {
    loginUsername: '',
    loginPassword: '',
    Authentication: {},
}

export default function(state = initialState, action) {
    switch (action.type) {
        case AUTHUSERNAME: {
            const { payload } = action;
         return { ...state, loginUsername: payload };
    }
        case AUTHPASSWORD: {
            const { payload } = action;
         return { ...state, loginPassword: payload };
    }
        case Authentication: {
            const { payload } = action;
        return { ...state, Authentication: payload };
    }
    
      
        default:
         return state;
    }
  }
  