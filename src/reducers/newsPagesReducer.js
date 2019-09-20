import {pageData, changeTab} from '../constants/redux';
import {BITCOINS, BUSINESS, APPLE,TECHCRUNCN, WSTREET } from '../constants/tabs';

const initialState = {
    newsData: null,
    activeTab: BITCOINS,
}

export default function(state = initialState, action) {
    switch (action.type) {
        case pageData: {
        const { payload } = action;
         return { ...state, newsData: payload };
    }
        case changeTab: {
            const { payload } = action;
            return { ...state, activeTab: payload };
        }
      
        default:
         return state;
    }
  }
  