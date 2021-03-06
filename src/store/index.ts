import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootSaga from './ducks/rootSaga';
import reducerUser from './ducks/users';
import reducerProducts from './ducks/products'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
  sagaMiddleware
]

const createRootReducer = () => combineReducers({
  users: reducerUser,
  products: reducerProducts
});

const store = createStore(createRootReducer(), composeWithDevTools(applyMiddleware(...middlewares)));

sagaMiddleware.run(rootSaga);

export { store };