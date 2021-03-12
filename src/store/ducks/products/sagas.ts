import { put, call } from 'redux-saga/effects';

import {
  getProductsSuccess,
  getProductsFailure,
  postProductSuccess,
  postProductFailure,
  deleteProductSuccess,
  deleteProductFailure
} from "./actions"

import FinancesService from "../../../services/products-service";
import { AxiosResponse } from 'axios';

export function* getProducts() {
  try {
    const response: AxiosResponse = yield call(FinancesService.getProducts);
    yield put(getProductsSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(getProductsFailure())
  }
}

export function* postProduct(action: any) {
  try {
    const response: AxiosResponse = yield call(FinancesService.postProduct, action.payload);
    yield put(postProductSuccess(response.data))
  } catch (err) {
    console.log(err)
    yield put(postProductFailure())
  }
}

export function* deleteProduct(action: any) {
  try {
    yield call(FinancesService.deleteProduct, action.payload);
    yield put(deleteProductSuccess())
  } catch (err) {
    console.log(err)
    yield put(deleteProductFailure())
  }
}
