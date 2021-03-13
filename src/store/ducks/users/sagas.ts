/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosResponse } from 'axios';
import { decodeToken } from 'react-jwt';
import { put, call } from 'redux-saga/effects';

import UserService from "../../../services/user-service";
import {
  loginFailure,
  loginSuccess,
  signUpFailure,
  signUpSuccess,
  loadUsersSuccess,
  loadUsersFailure,
  deleteUserSuccess,
  deleteUserFailure
} from './actions';
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

export function* postSignUp(action: any) {
  try {
    const response: AxiosResponse = yield call(UserService.postNewUser, action.payload);
    yield put(signUpSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(signUpFailure())
  }
}

export function* getUsers() {
  try {
    const response: AxiosResponse = yield call(UserService.getUsersList);
    yield put(loadUsersSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(loadUsersFailure())
  }
}

export function* deleteUser(action: any) {
  try {
    yield call(UserService.deleteUser, action.payload);
    yield put(deleteUserSuccess())
  } catch (err) {
    console.log(err)
    yield put(deleteUserFailure())
  }
}