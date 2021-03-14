import { combineReducers } from 'redux';
import users from './users';
import products from './products';

const createRootReducer = () => combineReducers({
  users,
  products
});

export default createRootReducer;
