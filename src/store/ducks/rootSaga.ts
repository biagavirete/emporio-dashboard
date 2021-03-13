import { takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';

import { UserTypes } from './users/types';
import { postLogin, postSignUp, getUsers } from './users/sagas';
import { getProducts, postProduct, deleteProduct } from './products/sagas';
import { ProductTypes } from './products/types';

export default function* rootSaga(): any {
  return yield* all([
    takeLatest(UserTypes.POST_LOGIN_REQUEST, postLogin),
    takeLatest(UserTypes.POST_SIGNUP_REQUEST, postSignUp),
    takeLatest(UserTypes.GET_USERSLIST_REQUEST, getUsers),

    takeLatest(ProductTypes.GET_PRODUCTS_REQUEST, getProducts),
    takeLatest(ProductTypes.POST_PRODUCT_REQUEST, postProduct),
    takeLatest(ProductTypes.DELETE_PRODUCT_REQUEST, deleteProduct)
  ])
}
