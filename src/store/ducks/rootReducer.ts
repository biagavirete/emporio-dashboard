import { combineReducers } from 'redux';
import users from './users';

const createRootReducer = () => combineReducers({
  users,
})

export default createRootReducer
