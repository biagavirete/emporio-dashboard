import { takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';

import { UserTypes } from './users/types';
import { ProductTypes } from './products/types';

import { postLogin, postSignUp, getUsers, deleteUser } from './users/sagas';
import { getProducts, postProduct, deleteProduct } from './products/sagas';

export default function* rootSaga(): any {
  return yield* all([
    takeLatest(UserTypes.POST_LOGIN_REQUEST, postLogin),
    takeLatest(UserTypes.POST_SIGNUP_REQUEST, postSignUp),
    takeLatest(UserTypes.GET_USERSLIST_REQUEST, getUsers),
    takeLatest(UserTypes.DELETE_USER_REQUEST, deleteUser),

    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductTypes.POST_PRODUCT_REQUEST, postProduct),
    takeLatest(ProductTypes.DELETE_PRODUCT_REQUEST, deleteProduct)
  ]);
};
