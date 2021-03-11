/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosResponse } from 'axios';
import { decodeToken } from 'react-jwt';
import { put, call } from 'redux-saga/effects';

import UserService from "../../../services/user-service";
import { loginFailure, loginSuccess } from './actions';
import { Data } from './types';

export function* postLogin(action: any) {
  try {
    const response: AxiosResponse = yield call(UserService.postLogin, action.payload);
    localStorage.setItem('token', response.data.accessToken);

    const decodedToken: Data = yield decodeToken(response.data.accessToken);
    const { sub } = yield decodedToken;

    const userData: AxiosResponse = yield call(UserService.getUserData, sub);
    yield put(loginSuccess(userData.data))
  } catch (err) {
    console.log(err)
    yield put(loginFailure())
  }
}