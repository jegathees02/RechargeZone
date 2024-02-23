import { combineReducers } from 'redux';
import userRoleReducer from './userRoleSlice';

const rootReducer = combineReducers({
  userRole: userRoleReducer,
  // Add other reducers here if you have them
});

export default rootReducer;
