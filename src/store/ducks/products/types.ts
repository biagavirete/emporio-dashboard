export enum ProductTypes {
  GET_PRODUCTS_REQUEST = '@products/GET_PRODUCTS_REQUEST',
  GET_PRODUCTS_SUCCESS = '@products/GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_FAILURE = '@products/GET_PRODUCTS_FAILURE',

  POST_PRODUCT_REQUEST = '@products/POST_PRODUCT_REQUEST',
  POST_PRODUCT_SUCCESS = '@products/POST_PRODUCT_SUCCESS',
  POST_PRODUCT_FAILURE = '@products/POST_PRODUCT_FAILURE',

  DELETE_PRODUCT_REQUEST = '@products/DELETE_PRODUCT_REQUEST',
  DELETE_PRODUCT_SUCCESS = '@products/DELETE_PRODUCT_SUCCESS',
  DELETE_PRODUCT_FAILURE = '@products/DELETE_PRODUCT_FAILURE',
}

export interface Product {
  title: string;
  price: string;
  description: string;
  image: string;
  id: string;
}

export interface FinanceState {
  products: Product[],
  readonly loading: boolean;
  readonly error: boolean;
  readonly success: boolean;
}
