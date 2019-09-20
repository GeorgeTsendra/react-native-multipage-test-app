import { combineReducers } from 'redux';
import AuthScreenReducer from './AuthScreenReducer';
import homepageReducer from './homepageReducer';
import newsPagesReducer from './newsPagesReducer';

export default combineReducers({
    AuthScreenReducer,
    homepageReducer,
    newsPagesReducer,
});
  