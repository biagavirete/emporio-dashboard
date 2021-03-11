import { takeLatest } from 'redux-saga/effects';
import { all } from 'typed-redux-saga';

import { UserTypes } from './users/types';
import { postLogin } from './users/sagas';


export default function* rootSaga(): any {
  return yield* all([
    takeLatest(UserTypes.POST_LOGIN_REQUEST, postLogin),
  ])
}
