import { action } from "typesafe-actions";
import { ProductTypes } from './types';

export const getProductsRequest = () => action(ProductTypes.GET_PRODUCTS_REQUEST);
export const getProductsSuccess = (data: any) => action(ProductTypes.GET_PRODUCTS_SUCCESS, data);
export const getProductsFailure = () => action(ProductTypes.GET_PRODUCTS_FAILURE);

export const postProductRequest = (newProduct: any) => action(ProductTypes.POST_PRODUCT_REQUEST, newProduct);
export const postProductSuccess = (data: any) => action(ProductTypes.POST_PRODUCT_SUCCESS, data);
export const postProductFailure = () => action(ProductTypes.POST_PRODUCT_FAILURE);

export const deleteProductRequest = (id: any) => action(ProductTypes.DELETE_PRODUCT_REQUEST, id);
export const deleteProductSuccess = () => action(ProductTypes.DELETE_PRODUCT_SUCCESS);
export const deleteProductFailure = () => action(ProductTypes.DELETE_PRODUCT_FAILURE);
